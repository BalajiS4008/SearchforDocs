import './animation.css';
import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { AnimationType, Skeleton, Variants } from '@syncfusion/react-notifications';
import { Button, Color, Position, Variant } from '@syncfusion/react-buttons';
import { SvgIcon } from '@syncfusion/react-base';

interface UserRequestState {
  isDataLoading: boolean;
  profileimage: string;
  postimage: string;
  cardname: string;
  cardtime: string;
}

interface ApiResponse {
  profImage: string;
  postImage: string;
  cardName: string;
  cardTime: string;
}

const refresh = 'M1 12C1 6.47715 5.47715 2 11 2C13.7624 2 16.2648 3.12139 18.0735 4.93138C18.7132 5.57146 19.3981 6.36248 20 7.09444V3H22V11H14V9H18.9692C18.277 8.13128 17.4165 7.10335 16.6588 6.34511C15.2098 4.89514 13.2104 4 11 4C6.58172 4 3 7.58172 3 12C3 16.4183 6.58172 20 11 20C14.6457 20 17.7243 17.5605 18.6874 14.2227L18.9647 13.262L20.8863 13.8165L20.609 14.7773C19.4055 18.9481 15.5605 22 11 22C5.47715 22 1 17.5228 1 12Z';

const refreshIcon = <SvgIcon
  d={refresh}
  height='18px'
  width='18px'
  style={{ verticalAlign: 'top' }}
/>
export default function App() {

  const [userRequest, setUserRequest] = useState<UserRequestState>({
    isDataLoading: true,
    profileimage: "image e-avatar",
    postimage: "image",
    cardname: "",
    cardtime: ""
  });


  const getData = (): Promise<ApiResponse> => {
    return new Promise(resolve => setTimeout(() => {
      const data: ApiResponse = {
        profImage: "image profile-image e-avatar",
        postImage: "image post-image",
        cardName: "Steven Buchanan",
        cardTime: new Date().toLocaleString()
      };
      resolve(data);
    }, 4000));
  };

  const loadData = useCallback((): void => {
    getData().then((data) => {
      setUserRequest({
        profileimage: data.profImage,
        postimage: data.postImage,
        cardname: data.cardName,
        cardtime: data.cardTime,
        isDataLoading: false
      });
    });
  }, []);

  const reload = (): void => {
    setUserRequest({
      profileimage: "image e-avatar",
      postimage: "image",
      cardname: "",
      cardtime: "",
      isDataLoading: true
    });
    loadData();
  };


  const { isDataLoading, profileimage, postimage, cardname, cardtime } = userRequest;

  useEffect(() => {
    loadData();
  }, [loadData]);

  let fade: React.JSX.Element;

  if (isDataLoading) {
    fade = (
      <div id="skeletonCard" className="e-card">
        <div className="cardProfile">
          <Skeleton variant={Variants.Circle} width='60px' height='60px' animation={AnimationType.Fade}></Skeleton>
        </div>
        <div className="cardinfo">
          <Skeleton width='30%' height='15px' animation={AnimationType.Fade}></Skeleton><br />
          <Skeleton width='15%' height='15px' animation={AnimationType.Fade}></Skeleton><br />
        </div>
        <div className="cardContent">
          <Skeleton variant={Variants.Rectangle}  width='100%' height='220px' animation={AnimationType.Fade}></Skeleton>
        </div>
        <div className="cardoptions">
          <Skeleton variant={Variants.Rectangle}  width='33px' height='30px' animation={AnimationType.Fade}></Skeleton>
          <Skeleton variant={Variants.Rectangle}   width='33px' height='30px' animation={AnimationType.Fade}></Skeleton>
        </div>
      </div>
    );

  } else {
    fade = (
      <div id="skeletondatacard" className="e-card">
        <div className="cardProfile">
          <div className={profileimage}></div>
        </div>
        <div className="cardinfo">
          <label id="name" style={{ fontSize: "15px" }}>{cardname}</label><br />
          <label id="time" style={{ fontWeight: "normal" }}>{cardtime}</label>
        </div>
        <div className="cardContent">
          <div className={postimage}></div>
        </div>
        <div className="cardoptions">
          <div id="cardLeftOptn" style={{ width: "20%" }}>
            <Button variant={Variant.Outlined} color={Color.Primary}>Like</Button>
          </div>
          <div id="cardRightOptn" >
            <Button color={Color.Primary} >Share</Button>
          </div>
        </div>
      </div>
    );
  }

  return (

      <><div className="row skeleton-animation">
      {fade}
      <br />
    </div><div>
        <Button id="reloadSkeleton" color={Color.Primary} icon={refreshIcon} iconPosition={Position.Right} onClick={reload}>Reload</Button>
      </div></>

  );
};