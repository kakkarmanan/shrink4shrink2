import { AgoraVideoPlayer } from "agora-rtc-react";
import React, { useEffect, useState } from "react";
import recognizeMic from "watson-speech/speech-to-text/recognize-microphone";

const Video = ({
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
  inCall,
  setInCall,
  appId,
  token,
}) => {
  const [users, setUsers] = useState([]);
  const [, setStart] = useState(false);
  const [text, setText] = useState(
    "lorfdjfd fdjdgjvbkjdbvj bk kjsdjvbvdbkv jb vbjvbkbvkjsbkk ejwus fuwf"
  );
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  useEffect(() => {
    const init = async (name) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        console.log("subscribe success");
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
          console.log(users);
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, type) => {
        console.log("unpublished", user, type);
        if (type === "audio") {
          user.audioTrack?.stop();
        }
        if (type === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        console.log("leaving", user);
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      await client.join(appId, name, token, null);
      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };
    if (ready && tracks) {
      console.log("init ready");
      init(channelName);
    }
  }, [channelName, ready, tracks, client, appId, token, users]);
  const s2t = () => {
    fetch("http://localhost:3001/api/speech-to-text/token")
      .then((response) => response.json())
      .then((token) => {
        console.log(token);
        var stream = recognizeMic({
          // token: token.accessToken,
          accessToken: token.accessToken,
          url: token.url,
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false, // optional - performs basic formatting on the results such as capitals an periods
        });
        console.log(stream);
        /**
         * Prints the users speech to the console
         * and assigns the text to the state.
         */
        stream.on("data", (data) => {
          setText(data.alternatives[0].transcript);
          console.log(data);
        });
        stream.on("error", function (err) {
          console.log(err);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (inCall) {
    s2t();
  }
  console.log(tracks);
  return (
    <div style={{ padding: "10px 5px" }}>
      <div style={{ display: "flex", flex: 1 }}>
        {tracks && (
          <AgoraVideoPlayer
            videoTrack={tracks[1]}
            style={{ height: "480px", width: "640px" }}
          />
        )}
        {users.length > 0 &&
          users.map((user, i) => {
            return (
              <AgoraVideoPlayer
                key={user.uid}
                videoTrack={user.videoTrack}
                style={{ height: "240px", width: "320px" }}
              />
            );
          })}
      </div>
      <div style={{ fontSize: "30px" }}>{text}</div>
    </div>
  );
};

export default Video;
