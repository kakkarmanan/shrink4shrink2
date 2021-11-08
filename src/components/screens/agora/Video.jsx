import { AgoraVideoPlayer } from "agora-rtc-react";
import React, { useEffect, useState } from "react";
import recognizeMic from "watson-speech/speech-to-text/recognize-microphone";
import firebase from "../../../firebase";

const storageRef = firebase.storage().ref();

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
  const [text, setText] = useState([""]);
  const client = useClient();
  let endpoint = "https://shrink4shrink.herokuapp.com";
  // if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  //   endpoint = "http://localhost:3001";
  // }
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  console.log(token);
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
  useEffect(() => {
    const s2t = () => {
      fetch(`${endpoint}/api/speech-to-text/token`)
        .then((response) => response.json())
        .then((token) => {
          console.log(token);
          var stream = recognizeMic({
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
            if (data.final && data.alternatives[0].confidence > 0.5) {
              setText((prev) => {
                return [...prev, data.alternatives[0].transcript];
              });
            }
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
    s2t();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inCall]);
  const generateReport = async () => {
    let data = await fetch("/api/notes", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    data = await data.json();
    console.log(data);
    // const file = new Blob([text], {
    //   type: "text/plain",
    // });
    // try {
    //   var mtRef = await storageRef.child(
    //     "notes-" + JSON.parse(localStorage.getItem("user"))._id + ".txt"
    //   );
    //   await mtRef.put(file);
    //   const res = await mtRef.getDownloadURL();
    //   console.log(res);
    // } catch (e) {
    //   console.log(e);
    // }
  };
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
      <div style={{ fontSize: "30px" }}>{text.toString()}</div>
      <button onClick={generateReport} type="button" class="btn btn-success">
        Success
      </button>
    </div>
  );
};

export default Video;
