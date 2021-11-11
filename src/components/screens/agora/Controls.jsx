import React, {  useState } from "react"; //useEffect,
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import CallEndIcon from "@mui/icons-material/CallEnd";

const Controls = ({ tracks, setStart, setInCall, client }) => {
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    // we close the tracks to perform cleanup
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };

  return (
    <div
      className="row"
      style={{
        width: "640px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ccc",
        position: "absolute",
        top: "70%",
        zIndex: 100,
        borderBottomRightRadius: "7px",
        borderBottomLeftRadius: "7px",
        padding: 5,
      }}
    >
      <div
        className="col-md-2"
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#439DF6",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => mute("audio")}
      >
        {trackState.audio ? <MicOffIcon /> : <MicIcon />}
      </div>
      <div
        className="col-md-2"
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#439DF6",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => mute("video")}
      >
        {trackState.video ? <VideocamOffIcon /> : <VideocamIcon />}
      </div>
      <div
        className="col-md-2"
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#439DF6",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => leaveChannel()}
      >
        <CallEndIcon />
      </div>
    </div>
  );
};

export default Controls;
