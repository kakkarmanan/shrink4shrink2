import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import React, { useState } from "react";
import Video from "./Video";

const config = { mode: "rtc", codec: "vp8" };
const appId = "370cc8b63bac46d381f17915984b033d";
const token =
  "006370cc8b63bac46d381f17915984b033dIACHweKnTBzy10yNSTIna4QhmfM2ivD0G8y28sNuF+wyCAx+f9gAAAAAEAD3dRUDLYaGYQEAAQAshoZh";

const VideoCall = () => {
  const useClient = createClient(config);
  const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
  const [inCall, setInCall] = useState(false);

  const onClickHandler = () => {
    setInCall(true);
  };
  return (
    <>
      {!inCall ? (
        <div className="row">
          <div>
            <button onClick={onClickHandler} type="button" id="join">
              JOIN
            </button>
            <button onClick={null} type="button" id="leave">
              LEAVE
            </button>
          </div>
        </div>
      ) : (
        <>
          <Video
            useClient={useClient}
            useMicrophoneAndCameraTracks={useMicrophoneAndCameraTracks}
            appId={appId}
            token={token}
            inCall={inCall}
            setInCall={setInCall}
            channelName={"test"}
          />
        </>
      )}
    </>
  );
};

export default VideoCall;
