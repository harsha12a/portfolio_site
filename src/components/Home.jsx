import { useState, useEffect } from "react";
function Home() {
  const roles = ["Full Stack Developer", "AI Enthusiast", "Competitive Programmer"];
  const [curr, setCurr] = useState(roles[0]);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurr(() => {
        const newRole = roles[i];
        i = (i + 1) % roles.length;
        return newRole;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dark:bg-black bg-white h-screen text-black dark:text-white flex flex-col justify-center items-center relative" id="home">

      <div className="absolute left-[10%] top-[15%] w-[120px] h-[120px] animate-morph-1"></div>
      <div className="absolute right-[20%] bottom-[5%] w-[120px] h-[120px] animate-morph-2"></div>

      <div className="bg-red-500 sm:w-[120px] sm:h-[120px] w-[80px] h-[80px] absolute ml-40 mb-20 rounded-full shadow-[0px_0px_50px_15px_rgba(255,10,10,0.4)]"></div>

      <div className="text-center z-[20]">
        {/* <h1 className="text-4xl sm:text-6xl font-bold">Hello, I'm Sree Satya Harsha</h1> */}
        <svg width="" height="" className="head px-5" viewBox="0 0 641 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.71 19.252C24.0589 19.2357 23.2451 19.2275 22.2686 19.2275C21.292 19.2113 20.2259 19.195 19.0703 19.1787C17.931 19.1624 16.7347 19.1543 15.4814 19.1543C14.2445 19.138 13.0319 19.1299 11.8438 19.1299C10.6556 19.1136 9.52441 19.1136 8.4502 19.1299C7.37598 19.1462 6.4401 19.1706 5.64258 19.2031V26.4541C5.64258 27.8376 5.65885 29.0501 5.69141 30.0918C5.74023 31.1172 5.78906 32.0042 5.83789 32.7529C5.90299 33.5016 5.97624 34.1283 6.05762 34.6328C6.15527 35.1374 6.25293 35.5605 6.35059 35.9023V36H0.491211V35.9023C0.588867 35.5605 0.678385 35.1374 0.759766 34.6328C0.857422 34.1283 0.938802 33.5016 1.00391 32.7529C1.06901 32.0042 1.11784 31.1172 1.15039 30.0918C1.18294 29.0501 1.19922 27.8376 1.19922 26.4541V10.5605C1.19922 9.17708 1.18294 7.97266 1.15039 6.94727C1.11784 5.9056 1.06901 5.01042 1.00391 4.26172C0.938802 3.49674 0.857422 2.86198 0.759766 2.35742C0.678385 1.85286 0.588867 1.42969 0.491211 1.08789V0.990234H6.35059V1.08789C6.25293 1.42969 6.15527 1.85286 6.05762 2.35742C5.97624 2.86198 5.90299 3.49674 5.83789 4.26172C5.78906 5.01042 5.74023 5.9056 5.69141 6.94727C5.65885 7.97266 5.64258 9.17708 5.64258 10.5605V16.8105C6.48893 16.8431 7.44922 16.8675 8.52344 16.8838C9.59766 16.8838 10.7207 16.8838 11.8926 16.8838C13.0645 16.8675 14.2526 16.8512 15.457 16.835C16.6777 16.8187 17.8496 16.8024 18.9727 16.7861C20.112 16.7536 21.1699 16.721 22.1465 16.6885C23.1393 16.6559 23.9938 16.6234 24.71 16.5908V10.5605C24.71 9.17708 24.6855 7.97266 24.6367 6.94727C24.6042 5.9056 24.5553 5.01042 24.4902 4.26172C24.4414 3.49674 24.3682 2.86198 24.2705 2.35742C24.1891 1.85286 24.0996 1.42969 24.002 1.08789V0.990234H29.8613V1.08789C29.7637 1.42969 29.666 1.85286 29.5684 2.35742C29.487 2.86198 29.4137 3.49674 29.3486 4.26172C29.2835 5.01042 29.2347 5.9056 29.2021 6.94727C29.1696 7.97266 29.1533 9.17708 29.1533 10.5605V26.4541C29.1533 27.8376 29.1696 29.0501 29.2021 30.0918C29.2347 31.1172 29.2835 32.0042 29.3486 32.7529C29.4137 33.5016 29.487 34.1283 29.5684 34.6328C29.666 35.1374 29.7637 35.5605 29.8613 35.9023V36H24.002V35.9023C24.0996 35.5605 24.1891 35.1374 24.2705 34.6328C24.3682 34.1283 24.4414 33.5016 24.4902 32.7529C24.5553 32.0042 24.6042 31.1172 24.6367 30.0918C24.6855 29.0501 24.71 27.8376 24.71 26.4541V19.252ZM36.5752 9.75488C38.1702 9.75488 39.806 9.75488 41.4824 9.75488C43.1589 9.73861 44.7132 9.72233 46.1455 9.70605C47.5778 9.6735 48.8066 9.64095 49.832 9.6084C50.8737 9.57585 51.5573 9.52702 51.8828 9.46191L50.9307 12.0986C50.4912 11.9847 49.9948 11.8789 49.4414 11.7812C48.9531 11.6999 48.359 11.6266 47.6592 11.5615C46.9756 11.4801 46.1781 11.4395 45.2666 11.4395C44.9411 11.4395 44.5667 11.4557 44.1436 11.4883C43.7204 11.5046 43.3135 11.529 42.9229 11.5615C42.4671 11.5941 42.0033 11.6266 41.5312 11.6592V21.3027C42.8496 21.2865 44.0378 21.2539 45.0957 21.2051C46.1536 21.1562 47.057 21.0911 47.8057 21.0098C48.6846 20.9447 49.4577 20.8551 50.125 20.7412L49.5391 23.6465C48.6439 23.5326 47.7406 23.4349 46.8291 23.3535C46.0479 23.2721 45.1852 23.207 44.2412 23.1582C43.2972 23.0931 42.3939 23.0605 41.5312 23.0605V34.1445C43.0449 34.1445 44.4365 34.0876 45.7061 33.9736C46.9756 33.8434 48.0824 33.7051 49.0264 33.5586C50.1331 33.3796 51.1341 33.1761 52.0293 32.9482L51.4678 36.1465C51.2236 36.1302 50.8249 36.1058 50.2715 36.0732C49.7344 36.057 49.1647 36.0407 48.5625 36.0244C47.9766 36.0244 47.4232 36.0163 46.9023 36C46.3815 36 46.0234 36 45.8281 36H36.5752V35.9023C36.6891 35.5605 36.7868 35.1211 36.8682 34.584C36.9658 34.0469 37.0391 33.3877 37.0879 32.6064C37.153 31.8089 37.2018 30.8649 37.2344 29.7744C37.2669 28.6839 37.2832 27.4062 37.2832 25.9414V19.7891C37.2832 18.3242 37.2669 17.0547 37.2344 15.9805C37.2018 14.89 37.153 13.9541 37.0879 13.1729C37.0391 12.3753 36.9658 11.708 36.8682 11.1709C36.7868 10.6338 36.6891 10.1943 36.5752 9.85254V9.75488ZM62.4297 34.0957C63.9434 34.0957 65.335 34.0387 66.6045 33.9248C67.8903 33.7946 69.0133 33.6562 69.9736 33.5098C71.0967 33.3307 72.1139 33.1273 73.0254 32.8994L72.4639 36.1465C72.236 36.1302 71.8454 36.1058 71.292 36.0732C70.7549 36.057 70.1852 36.0407 69.583 36.0244C68.9808 36.0244 68.4193 36.0163 67.8984 36C67.3776 36 67.0195 36 66.8242 36H57.4736V35.9023C57.5876 35.5605 57.6852 35.1211 57.7666 34.584C57.8643 34.0469 57.9375 33.3877 57.9863 32.6064C58.0514 31.8089 58.1003 30.8649 58.1328 29.7744C58.1654 28.6839 58.1816 27.4062 58.1816 25.9414V19.7891C58.1816 18.3242 58.1654 17.0547 58.1328 15.9805C58.1003 14.89 58.0514 13.9541 57.9863 13.1729C57.9375 12.3753 57.8643 11.708 57.7666 11.1709C57.6852 10.6338 57.5876 10.1943 57.4736 9.85254V9.75488H63.1133V9.85254C62.9993 10.1943 62.9017 10.6338 62.8203 11.1709C62.7389 11.708 62.6657 12.3753 62.6006 13.1729C62.5518 13.9541 62.5111 14.89 62.4785 15.9805C62.446 17.0547 62.4297 18.3242 62.4297 19.7891V34.0957ZM82.2051 34.0957C83.7188 34.0957 85.1104 34.0387 86.3799 33.9248C87.6657 33.7946 88.7887 33.6562 89.749 33.5098C90.8721 33.3307 91.8893 33.1273 92.8008 32.8994L92.2393 36.1465C92.0114 36.1302 91.6208 36.1058 91.0674 36.0732C90.5303 36.057 89.9606 36.0407 89.3584 36.0244C88.7562 36.0244 88.1947 36.0163 87.6738 36C87.153 36 86.7949 36 86.5996 36H77.249V35.9023C77.363 35.5605 77.4606 35.1211 77.542 34.584C77.6396 34.0469 77.7129 33.3877 77.7617 32.6064C77.8268 31.8089 77.8757 30.8649 77.9082 29.7744C77.9408 28.6839 77.957 27.4062 77.957 25.9414V19.7891C77.957 18.3242 77.9408 17.0547 77.9082 15.9805C77.8757 14.89 77.8268 13.9541 77.7617 13.1729C77.7129 12.3753 77.6396 11.708 77.542 11.1709C77.4606 10.6338 77.363 10.1943 77.249 9.85254V9.75488H82.8887V9.85254C82.7747 10.1943 82.6771 10.6338 82.5957 11.1709C82.5143 11.708 82.4411 12.3753 82.376 13.1729C82.3271 13.9541 82.2865 14.89 82.2539 15.9805C82.2214 17.0547 82.2051 18.3242 82.2051 19.7891V34.0957ZM95.6328 22.792C95.6328 20.8714 95.9909 19.0892 96.707 17.4453C97.4395 15.8014 98.4323 14.3773 99.6855 13.1729C100.939 11.9521 102.42 11 104.129 10.3164C105.838 9.63281 107.669 9.29102 109.622 9.29102C111.543 9.29102 113.349 9.61654 115.042 10.2676C116.751 10.9023 118.232 11.8138 119.485 13.002C120.755 14.1901 121.756 15.6305 122.488 17.3232C123.221 19.016 123.587 20.9121 123.587 23.0117C123.587 24.7533 123.278 26.4378 122.659 28.0654C122.041 29.6768 121.137 31.109 119.949 32.3623C118.761 33.5993 117.296 34.5921 115.555 35.3408C113.813 36.0732 111.819 36.4395 109.573 36.4395C107.669 36.4395 105.87 36.1221 104.178 35.4873C102.485 34.8525 101.004 33.9492 99.7344 32.7773C98.4648 31.5892 97.4639 30.1569 96.7314 28.4805C95.999 26.7878 95.6328 24.8916 95.6328 22.792ZM110.184 34.7061C111.421 34.7061 112.56 34.4619 113.602 33.9736C114.643 33.4854 115.538 32.7855 116.287 31.874C117.052 30.9626 117.638 29.8558 118.045 28.5537C118.468 27.2354 118.68 25.7542 118.68 24.1104C118.68 22.2386 118.476 20.5052 118.069 18.9102C117.679 17.3151 117.076 15.9398 116.263 14.7842C115.465 13.6123 114.464 12.7008 113.26 12.0498C112.055 11.3825 110.647 11.0488 109.036 11.0488C107.799 11.0488 106.66 11.2848 105.618 11.7568C104.576 12.2288 103.673 12.9124 102.908 13.8076C102.16 14.7028 101.574 15.8014 101.15 17.1035C100.727 18.4056 100.516 19.8867 100.516 21.5469C100.516 23.4023 100.719 25.1357 101.126 26.7471C101.549 28.3421 102.16 29.7337 102.957 30.9219C103.771 32.0938 104.78 33.0215 105.984 33.7051C107.189 34.3724 108.589 34.7061 110.184 34.7061ZM127.859 33.8516C127.859 33.4935 127.924 33.1598 128.055 32.8506C128.201 32.5251 128.388 32.2484 128.616 32.0205C128.86 31.7764 129.137 31.5892 129.446 31.459C129.772 31.3125 130.114 31.2393 130.472 31.2393C130.846 31.2393 131.188 31.3206 131.497 31.4834C131.823 31.6299 132.099 31.8415 132.327 32.1182C132.571 32.3786 132.758 32.6878 132.889 33.0459C133.035 33.404 133.108 33.7865 133.108 34.1934C133.108 34.8281 132.962 35.5199 132.669 36.2686C132.392 37.0173 132.018 37.7822 131.546 38.5635C131.09 39.3447 130.569 40.1097 129.983 40.8584C129.414 41.6234 128.828 42.3395 128.226 43.0068L127.566 42.4453C128.38 41.485 129.031 40.5329 129.52 39.5889C130.008 38.6449 130.293 37.6113 130.374 36.4883C129.658 36.4557 129.056 36.1953 128.567 35.707C128.095 35.2188 127.859 34.6003 127.859 33.8516ZM154.324 35.9023C154.422 35.5605 154.511 35.1374 154.593 34.6328C154.674 34.1283 154.747 33.5016 154.812 32.7529C154.878 32.0042 154.926 31.1172 154.959 30.0918C154.992 29.0501 155.008 27.8376 155.008 26.4541V10.5605C155.008 9.17708 154.992 7.97266 154.959 6.94727C154.926 5.9056 154.878 5.01042 154.812 4.26172C154.747 3.49674 154.674 2.86198 154.593 2.35742C154.511 1.85286 154.422 1.42969 154.324 1.08789V0.990234H160.159V1.08789C160.062 1.42969 159.964 1.85286 159.866 2.35742C159.785 2.86198 159.712 3.49674 159.646 4.26172C159.598 5.01042 159.549 5.9056 159.5 6.94727C159.467 7.97266 159.451 9.17708 159.451 10.5605V26.4541C159.451 27.8376 159.467 29.0501 159.5 30.0918C159.549 31.1172 159.598 32.0042 159.646 32.7529C159.712 33.5016 159.785 34.1283 159.866 34.6328C159.964 35.1374 160.062 35.5605 160.159 35.9023V36H154.324V35.9023ZM165.604 2.69922C165.604 2.04818 165.831 1.50293 166.287 1.06348C166.743 0.624023 167.312 0.404297 167.996 0.404297C168.647 0.404297 169.201 0.656576 169.656 1.16113C170.112 1.66569 170.34 2.29232 170.34 3.04102C170.34 3.61068 170.21 4.22917 169.949 4.89648C169.689 5.5638 169.347 6.23926 168.924 6.92285C168.517 7.60645 168.053 8.29004 167.532 8.97363C167.011 9.64095 166.482 10.2676 165.945 10.8535L165.286 10.292C166.019 9.44564 166.629 8.58301 167.117 7.7041C167.605 6.8252 167.898 5.95443 167.996 5.0918C167.345 5.04297 166.784 4.80697 166.312 4.38379C165.84 3.94434 165.604 3.38281 165.604 2.69922ZM174.075 35.9023C174.287 35.6745 174.498 35.2594 174.71 34.6572C174.938 34.055 175.117 33.404 175.247 32.7041C175.442 31.5648 175.654 30.2708 175.882 28.8223C176.126 27.3574 176.362 25.8519 176.59 24.3057C176.834 22.7594 177.07 21.2214 177.298 19.6914C177.526 18.1452 177.737 16.7129 177.933 15.3945C178.128 14.0762 178.291 12.9206 178.421 11.9277C178.551 10.9349 178.641 10.2106 178.689 9.75488H181.595L193.24 30.6045L205.179 9.75488H207.547L210.477 30.1406C210.623 31.0684 210.761 31.8577 210.892 32.5088C211.038 33.1598 211.176 33.7132 211.307 34.1689C211.437 34.6084 211.567 34.9665 211.697 35.2432C211.827 35.5199 211.941 35.7396 212.039 35.9023V36H206.033V35.9023C206.082 35.7721 206.139 35.5524 206.204 35.2432C206.285 34.9339 206.326 34.5677 206.326 34.1445C206.326 33.8678 206.302 33.4691 206.253 32.9482C206.22 32.4274 206.163 31.9147 206.082 31.4102L203.982 16.4443L192.874 35.9512L191.141 35.707L180.228 16.2979C179.821 19.0322 179.463 21.5632 179.153 23.8906C179.023 24.8835 178.893 25.8763 178.763 26.8691C178.632 27.862 178.519 28.7979 178.421 29.6768C178.323 30.5394 178.242 31.3044 178.177 31.9717C178.112 32.639 178.079 33.1354 178.079 33.4609C178.079 33.8678 178.087 34.2259 178.104 34.5352C178.12 34.8281 178.144 35.0885 178.177 35.3164C178.209 35.5768 178.242 35.8047 178.274 36H174.075V35.9023ZM247.122 6.55664H246.585C246.455 6.18229 246.243 5.75911 245.95 5.28711C245.674 4.8151 245.299 4.37565 244.827 3.96875C244.371 3.54557 243.81 3.19564 243.143 2.91895C242.492 2.64225 241.718 2.50391 240.823 2.50391C240.026 2.50391 239.318 2.62598 238.699 2.87012C238.081 3.11426 237.56 3.45605 237.137 3.89551C236.73 4.33496 236.421 4.85579 236.209 5.45801C235.997 6.06022 235.892 6.72754 235.892 7.45996C235.892 8.63184 236.217 9.75488 236.868 10.8291C237.535 11.887 238.366 12.9368 239.358 13.9785C240.351 15.0202 241.425 16.0618 242.581 17.1035C243.737 18.1452 244.811 19.2275 245.804 20.3506C246.797 21.4736 247.618 22.6536 248.27 23.8906C248.937 25.1113 249.271 26.4297 249.271 27.8457C249.271 28.9036 249.083 29.9697 248.709 31.0439C248.351 32.1019 247.789 33.054 247.024 33.9004C246.259 34.7467 245.275 35.4385 244.07 35.9756C242.866 36.4964 241.434 36.7568 239.773 36.7568C238.846 36.7568 237.959 36.6673 237.112 36.4883C236.282 36.3255 235.509 36.1221 234.793 35.8779C234.093 35.6175 233.458 35.3408 232.889 35.0479C232.335 34.7549 231.88 34.4863 231.521 34.2422L232.083 28.8467H232.693C232.872 29.6117 233.165 30.3441 233.572 31.0439C233.979 31.7275 234.476 32.3379 235.062 32.875C235.664 33.3958 236.347 33.819 237.112 34.1445C237.877 34.4538 238.715 34.6084 239.627 34.6084C240.457 34.6084 241.198 34.4863 241.849 34.2422C242.516 33.9818 243.086 33.6318 243.558 33.1924C244.03 32.7367 244.388 32.1995 244.632 31.5811C244.892 30.9626 245.022 30.2871 245.022 29.5547C245.022 28.5293 244.835 27.5853 244.461 26.7227C244.087 25.8438 243.59 25.0137 242.972 24.2324C242.369 23.4512 241.678 22.6943 240.896 21.9619C240.132 21.2295 239.342 20.4971 238.528 19.7646C237.715 19.016 236.917 18.251 236.136 17.4697C235.371 16.6885 234.679 15.8584 234.061 14.9795C233.458 14.0843 232.97 13.1322 232.596 12.123C232.221 11.0977 232.034 9.97461 232.034 8.75391C232.034 7.4681 232.278 6.3125 232.767 5.28711C233.271 4.24544 233.93 3.3584 234.744 2.62598C235.574 1.89355 236.51 1.33203 237.552 0.941406C238.593 0.550781 239.668 0.355469 240.774 0.355469C241.588 0.355469 242.337 0.420573 243.021 0.550781C243.704 0.68099 244.314 0.835612 244.852 1.01465C245.405 1.19368 245.885 1.37272 246.292 1.55176C246.699 1.73079 247.033 1.87728 247.293 1.99121L247.122 6.55664ZM259.939 23.2559C260.265 23.3047 260.59 23.3454 260.916 23.3779C261.258 23.3942 261.583 23.4023 261.893 23.4023C263.927 23.4023 265.465 22.8571 266.507 21.7666C267.565 20.6761 268.094 19.0404 268.094 16.8594C268.094 15.069 267.671 13.653 266.824 12.6113C265.994 11.5697 264.765 11.0488 263.138 11.0488C262.617 11.0488 262.153 11.0732 261.746 11.1221C261.355 11.1546 261.022 11.1953 260.745 11.2441C260.436 11.3092 260.167 11.3743 259.939 11.4395V23.2559ZM263.675 24.8428C263.349 24.8916 263.024 24.9242 262.698 24.9404C262.389 24.9404 262.072 24.9404 261.746 24.9404C261.486 24.9404 261.201 24.9323 260.892 24.916C260.582 24.8997 260.265 24.8753 259.939 24.8428V26.0391C259.939 27.4876 259.956 28.7572 259.988 29.8477C260.021 30.9219 260.062 31.8496 260.11 32.6309C260.175 33.4121 260.249 34.0713 260.33 34.6084C260.411 35.1292 260.509 35.5605 260.623 35.9023V36H254.983V35.9023C255.097 35.5605 255.195 35.1211 255.276 34.584C255.374 34.0469 255.447 33.3877 255.496 32.6064C255.561 31.8089 255.61 30.8649 255.643 29.7744C255.675 28.6839 255.691 27.4062 255.691 25.9414V19.7891C255.691 18.3242 255.675 17.0547 255.643 15.9805C255.61 14.89 255.561 13.9541 255.496 13.1729C255.447 12.3753 255.374 11.708 255.276 11.1709C255.195 10.6338 255.097 10.1943 254.983 9.85254V9.75488C255.244 9.77116 255.521 9.78743 255.813 9.80371C256.058 9.81999 256.326 9.83626 256.619 9.85254C256.928 9.85254 257.238 9.85254 257.547 9.85254C258.068 9.85254 258.841 9.80371 259.866 9.70605C260.892 9.6084 262.096 9.55957 263.479 9.55957C264.879 9.55957 266.149 9.73047 267.288 10.0723C268.444 10.4141 269.428 10.9023 270.242 11.5371C271.072 12.1719 271.707 12.945 272.146 13.8564C272.602 14.7679 272.83 15.7852 272.83 16.9082C272.83 17.7871 272.708 18.5928 272.464 19.3252C272.22 20.0413 271.878 20.6924 271.438 21.2783C270.999 21.848 270.478 22.3525 269.876 22.792C269.274 23.2314 268.606 23.6139 267.874 23.9395L272.977 31.1416C273.416 31.7275 273.855 32.2891 274.295 32.8262C274.751 33.3633 275.182 33.8434 275.589 34.2666C275.996 34.6898 276.378 35.0479 276.736 35.3408C277.094 35.6175 277.396 35.8047 277.64 35.9023V36H271.243C271.243 35.8535 271.137 35.6012 270.926 35.2432C270.73 34.8688 270.494 34.4863 270.218 34.0957C269.957 33.6888 269.689 33.2982 269.412 32.9238C269.152 32.5495 268.956 32.2728 268.826 32.0938L263.675 24.8428ZM279.935 9.75488C281.53 9.75488 283.165 9.75488 284.842 9.75488C286.518 9.73861 288.073 9.72233 289.505 9.70605C290.937 9.6735 292.166 9.64095 293.191 9.6084C294.233 9.57585 294.917 9.52702 295.242 9.46191L294.29 12.0986C293.851 11.9847 293.354 11.8789 292.801 11.7812C292.312 11.6999 291.718 11.6266 291.019 11.5615C290.335 11.4801 289.537 11.4395 288.626 11.4395C288.3 11.4395 287.926 11.4557 287.503 11.4883C287.08 11.5046 286.673 11.529 286.282 11.5615C285.826 11.5941 285.363 11.6266 284.891 11.6592V21.3027C286.209 21.2865 287.397 21.2539 288.455 21.2051C289.513 21.1562 290.416 21.0911 291.165 21.0098C292.044 20.9447 292.817 20.8551 293.484 20.7412L292.898 23.6465C292.003 23.5326 291.1 23.4349 290.188 23.3535C289.407 23.2721 288.545 23.207 287.601 23.1582C286.657 23.0931 285.753 23.0605 284.891 23.0605V34.1445C286.404 34.1445 287.796 34.0876 289.065 33.9736C290.335 33.8434 291.442 33.7051 292.386 33.5586C293.493 33.3796 294.493 33.1761 295.389 32.9482L294.827 36.1465C294.583 36.1302 294.184 36.1058 293.631 36.0732C293.094 36.057 292.524 36.0407 291.922 36.0244C291.336 36.0244 290.783 36.0163 290.262 36C289.741 36 289.383 36 289.188 36H279.935V35.9023C280.049 35.5605 280.146 35.1211 280.228 34.584C280.325 34.0469 280.398 33.3877 280.447 32.6064C280.512 31.8089 280.561 30.8649 280.594 29.7744C280.626 28.6839 280.643 27.4062 280.643 25.9414V19.7891C280.643 18.3242 280.626 17.0547 280.594 15.9805C280.561 14.89 280.512 13.9541 280.447 13.1729C280.398 12.3753 280.325 11.708 280.228 11.1709C280.146 10.6338 280.049 10.1943 279.935 9.85254V9.75488ZM300.833 9.75488C302.428 9.75488 304.064 9.75488 305.74 9.75488C307.417 9.73861 308.971 9.72233 310.403 9.70605C311.836 9.6735 313.064 9.64095 314.09 9.6084C315.132 9.57585 315.815 9.52702 316.141 9.46191L315.188 12.0986C314.749 11.9847 314.253 11.8789 313.699 11.7812C313.211 11.6999 312.617 11.6266 311.917 11.5615C311.233 11.4801 310.436 11.4395 309.524 11.4395C309.199 11.4395 308.825 11.4557 308.401 11.4883C307.978 11.5046 307.571 11.529 307.181 11.5615C306.725 11.5941 306.261 11.6266 305.789 11.6592V21.3027C307.107 21.2865 308.296 21.2539 309.354 21.2051C310.411 21.1562 311.315 21.0911 312.063 21.0098C312.942 20.9447 313.715 20.8551 314.383 20.7412L313.797 23.6465C312.902 23.5326 311.998 23.4349 311.087 23.3535C310.306 23.2721 309.443 23.207 308.499 23.1582C307.555 23.0931 306.652 23.0605 305.789 23.0605V34.1445C307.303 34.1445 308.694 34.0876 309.964 33.9736C311.233 33.8434 312.34 33.7051 313.284 33.5586C314.391 33.3796 315.392 33.1761 316.287 32.9482L315.726 36.1465C315.481 36.1302 315.083 36.1058 314.529 36.0732C313.992 36.057 313.423 36.0407 312.82 36.0244C312.234 36.0244 311.681 36.0163 311.16 36C310.639 36 310.281 36 310.086 36H300.833V35.9023C300.947 35.5605 301.045 35.1211 301.126 34.584C301.224 34.0469 301.297 33.3877 301.346 32.6064C301.411 31.8089 301.46 30.8649 301.492 29.7744C301.525 28.6839 301.541 27.4062 301.541 25.9414V19.7891C301.541 18.3242 301.525 17.0547 301.492 15.9805C301.46 14.89 301.411 13.9541 301.346 13.1729C301.297 12.3753 301.224 11.708 301.126 11.1709C301.045 10.6338 300.947 10.1943 300.833 9.85254V9.75488ZM351.614 6.55664H351.077C350.947 6.18229 350.735 5.75911 350.442 5.28711C350.166 4.8151 349.791 4.37565 349.319 3.96875C348.864 3.54557 348.302 3.19564 347.635 2.91895C346.984 2.64225 346.211 2.50391 345.315 2.50391C344.518 2.50391 343.81 2.62598 343.191 2.87012C342.573 3.11426 342.052 3.45605 341.629 3.89551C341.222 4.33496 340.913 4.85579 340.701 5.45801C340.49 6.06022 340.384 6.72754 340.384 7.45996C340.384 8.63184 340.709 9.75488 341.36 10.8291C342.028 11.887 342.858 12.9368 343.851 13.9785C344.843 15.0202 345.918 16.0618 347.073 17.1035C348.229 18.1452 349.303 19.2275 350.296 20.3506C351.289 21.4736 352.111 22.6536 352.762 23.8906C353.429 25.1113 353.763 26.4297 353.763 27.8457C353.763 28.9036 353.576 29.9697 353.201 31.0439C352.843 32.1019 352.282 33.054 351.517 33.9004C350.752 34.7467 349.767 35.4385 348.562 35.9756C347.358 36.4964 345.926 36.7568 344.266 36.7568C343.338 36.7568 342.451 36.6673 341.604 36.4883C340.774 36.3255 340.001 36.1221 339.285 35.8779C338.585 35.6175 337.951 35.3408 337.381 35.0479C336.827 34.7549 336.372 34.4863 336.014 34.2422L336.575 28.8467H337.186C337.365 29.6117 337.658 30.3441 338.064 31.0439C338.471 31.7275 338.968 32.3379 339.554 32.875C340.156 33.3958 340.84 33.819 341.604 34.1445C342.369 34.4538 343.208 34.6084 344.119 34.6084C344.949 34.6084 345.69 34.4863 346.341 34.2422C347.008 33.9818 347.578 33.6318 348.05 33.1924C348.522 32.7367 348.88 32.1995 349.124 31.5811C349.384 30.9626 349.515 30.2871 349.515 29.5547C349.515 28.5293 349.327 27.5853 348.953 26.7227C348.579 25.8438 348.082 25.0137 347.464 24.2324C346.862 23.4512 346.17 22.6943 345.389 21.9619C344.624 21.2295 343.834 20.4971 343.021 19.7646C342.207 19.016 341.409 18.251 340.628 17.4697C339.863 16.6885 339.171 15.8584 338.553 14.9795C337.951 14.0843 337.462 13.1322 337.088 12.123C336.714 11.0977 336.526 9.97461 336.526 8.75391C336.526 7.4681 336.771 6.3125 337.259 5.28711C337.763 4.24544 338.423 3.3584 339.236 2.62598C340.066 1.89355 341.002 1.33203 342.044 0.941406C343.086 0.550781 344.16 0.355469 345.267 0.355469C346.08 0.355469 346.829 0.420573 347.513 0.550781C348.196 0.68099 348.807 0.835612 349.344 1.01465C349.897 1.19368 350.377 1.37272 350.784 1.55176C351.191 1.73079 351.525 1.87728 351.785 1.99121L351.614 6.55664ZM375.174 27.748C374.734 27.748 374.181 27.748 373.514 27.748C372.863 27.748 372.146 27.748 371.365 27.748C370.584 27.748 369.778 27.748 368.948 27.748C368.118 27.748 367.329 27.7562 366.58 27.7725C365.831 27.7725 365.148 27.7806 364.529 27.7969C363.911 27.7969 363.431 27.7969 363.089 27.7969L362.186 29.7012C361.795 30.4824 361.461 31.166 361.185 31.752C360.908 32.3216 360.68 32.8262 360.501 33.2656C360.322 33.7051 360.192 34.0876 360.11 34.4131C360.029 34.7223 359.988 35.0153 359.988 35.292C359.988 35.471 359.996 35.6094 360.013 35.707C360.029 35.7884 360.053 35.8535 360.086 35.9023V36H355.789V35.9023C355.903 35.7884 356.082 35.5443 356.326 35.1699C356.57 34.7793 356.847 34.3073 357.156 33.7539C357.482 33.2005 357.824 32.5739 358.182 31.874C358.556 31.1742 358.922 30.4499 359.28 29.7012L369.241 9.14453H371.072L380.838 29.7012C381.212 30.4824 381.587 31.2311 381.961 31.9473C382.352 32.6634 382.71 33.3063 383.035 33.876C383.361 34.4294 383.646 34.8932 383.89 35.2676C384.134 35.6257 384.297 35.8372 384.378 35.9023V36H378.128C378.16 35.8698 378.177 35.7559 378.177 35.6582C378.177 35.5443 378.177 35.4222 378.177 35.292C378.177 34.9339 378.095 34.5026 377.933 33.998C377.786 33.4935 377.599 32.9808 377.371 32.46C377.16 31.9229 376.932 31.4102 376.688 30.9219C376.46 30.4336 376.272 30.0267 376.126 29.7012L375.174 27.748ZM364.041 25.8438H365.53C366.214 25.8438 366.938 25.8438 367.703 25.8438C368.484 25.8275 369.266 25.8193 370.047 25.8193C370.828 25.8193 371.585 25.8193 372.317 25.8193C373.05 25.8031 373.709 25.7949 374.295 25.7949L369.241 15.0039L364.041 25.8438ZM392.703 11.5615C391.222 11.5615 389.871 11.6266 388.65 11.7568C387.446 11.887 386.404 12.0254 385.525 12.1719C384.516 12.3509 383.605 12.5462 382.791 12.7578L383.279 9.6084C383.523 9.64095 383.922 9.66536 384.476 9.68164C385.029 9.69792 385.607 9.71419 386.209 9.73047C386.827 9.73047 387.405 9.73861 387.942 9.75488C388.496 9.75488 388.878 9.75488 389.09 9.75488H400.638C400.833 9.75488 401.191 9.75488 401.712 9.75488C402.249 9.73861 402.819 9.73047 403.421 9.73047C404.023 9.71419 404.601 9.69792 405.154 9.68164C405.708 9.66536 406.106 9.64095 406.351 9.6084L406.839 12.7578C406.058 12.5462 405.162 12.3509 404.153 12.1719C403.291 12.0254 402.249 11.887 401.028 11.7568C399.824 11.6266 398.465 11.5615 396.951 11.5615V25.9414C396.951 27.4062 396.967 28.6839 397 29.7744C397.033 30.8649 397.073 31.8089 397.122 32.6064C397.187 33.3877 397.26 34.0469 397.342 34.584C397.423 35.1211 397.521 35.5605 397.635 35.9023V36H391.995V35.9023C392.109 35.5605 392.207 35.1211 392.288 34.584C392.369 34.0469 392.443 33.3877 392.508 32.6064C392.573 31.8089 392.622 30.8649 392.654 29.7744C392.687 28.6839 392.703 27.4062 392.703 25.9414V11.5615ZM421.561 25.9414C421.561 27.4062 421.577 28.6839 421.609 29.7744C421.642 30.8649 421.683 31.8089 421.731 32.6064C421.797 33.3877 421.87 34.0469 421.951 34.584C422.049 35.1211 422.155 35.5605 422.269 35.9023V36H416.604V35.9023C416.718 35.5605 416.816 35.1211 416.897 34.584C416.995 34.0469 417.068 33.3877 417.117 32.6064C417.182 31.8089 417.231 30.8649 417.264 29.7744C417.296 28.6839 417.312 27.4062 417.312 25.9414V24.2568L408.523 12.6602C407.938 11.8789 407.376 11.2523 406.839 10.7803C406.302 10.292 405.895 9.98275 405.618 9.85254V9.75488H412.552C412.552 10.0479 412.658 10.5036 412.869 11.1221C413.081 11.7243 413.512 12.4648 414.163 13.3438L420.364 21.5469L426.712 13.002C427.168 12.3835 427.509 11.7731 427.737 11.1709C427.981 10.5687 428.104 10.0967 428.104 9.75488H432.571V9.85254C432.164 10.1292 431.741 10.4792 431.302 10.9023C430.879 11.3255 430.382 11.9277 429.812 12.709L421.561 23.8906V25.9414ZM449.588 27.748C449.148 27.748 448.595 27.748 447.928 27.748C447.277 27.748 446.561 27.748 445.779 27.748C444.998 27.748 444.192 27.748 443.362 27.748C442.532 27.748 441.743 27.7562 440.994 27.7725C440.245 27.7725 439.562 27.7806 438.943 27.7969C438.325 27.7969 437.845 27.7969 437.503 27.7969L436.6 29.7012C436.209 30.4824 435.875 31.166 435.599 31.752C435.322 32.3216 435.094 32.8262 434.915 33.2656C434.736 33.7051 434.606 34.0876 434.524 34.4131C434.443 34.7223 434.402 35.0153 434.402 35.292C434.402 35.471 434.41 35.6094 434.427 35.707C434.443 35.7884 434.467 35.8535 434.5 35.9023V36H430.203V35.9023C430.317 35.7884 430.496 35.5443 430.74 35.1699C430.984 34.7793 431.261 34.3073 431.57 33.7539C431.896 33.2005 432.238 32.5739 432.596 31.874C432.97 31.1742 433.336 30.4499 433.694 29.7012L443.655 9.14453H445.486L455.252 29.7012C455.626 30.4824 456.001 31.2311 456.375 31.9473C456.766 32.6634 457.124 33.3063 457.449 33.876C457.775 34.4294 458.06 34.8932 458.304 35.2676C458.548 35.6257 458.711 35.8372 458.792 35.9023V36H452.542C452.575 35.8698 452.591 35.7559 452.591 35.6582C452.591 35.5443 452.591 35.4222 452.591 35.292C452.591 34.9339 452.509 34.5026 452.347 33.998C452.2 33.4935 452.013 32.9808 451.785 32.46C451.574 31.9229 451.346 31.4102 451.102 30.9219C450.874 30.4336 450.687 30.0267 450.54 29.7012L449.588 27.748ZM438.455 25.8438H439.944C440.628 25.8438 441.352 25.8438 442.117 25.8438C442.898 25.8275 443.68 25.8193 444.461 25.8193C445.242 25.8193 445.999 25.8193 446.731 25.8193C447.464 25.8031 448.123 25.7949 448.709 25.7949L443.655 15.0039L438.455 25.8438ZM501.272 19.252C500.621 19.2357 499.808 19.2275 498.831 19.2275C497.854 19.2113 496.788 19.195 495.633 19.1787C494.493 19.1624 493.297 19.1543 492.044 19.1543C490.807 19.138 489.594 19.1299 488.406 19.1299C487.218 19.1136 486.087 19.1136 485.013 19.1299C483.938 19.1462 483.003 19.1706 482.205 19.2031V26.4541C482.205 27.8376 482.221 29.0501 482.254 30.0918C482.303 31.1172 482.352 32.0042 482.4 32.7529C482.465 33.5016 482.539 34.1283 482.62 34.6328C482.718 35.1374 482.815 35.5605 482.913 35.9023V36H477.054V35.9023C477.151 35.5605 477.241 35.1374 477.322 34.6328C477.42 34.1283 477.501 33.5016 477.566 32.7529C477.632 32.0042 477.68 31.1172 477.713 30.0918C477.745 29.0501 477.762 27.8376 477.762 26.4541V10.5605C477.762 9.17708 477.745 7.97266 477.713 6.94727C477.68 5.9056 477.632 5.01042 477.566 4.26172C477.501 3.49674 477.42 2.86198 477.322 2.35742C477.241 1.85286 477.151 1.42969 477.054 1.08789V0.990234H482.913V1.08789C482.815 1.42969 482.718 1.85286 482.62 2.35742C482.539 2.86198 482.465 3.49674 482.4 4.26172C482.352 5.01042 482.303 5.9056 482.254 6.94727C482.221 7.97266 482.205 9.17708 482.205 10.5605V16.8105C483.051 16.8431 484.012 16.8675 485.086 16.8838C486.16 16.8838 487.283 16.8838 488.455 16.8838C489.627 16.8675 490.815 16.8512 492.02 16.835C493.24 16.8187 494.412 16.8024 495.535 16.7861C496.674 16.7536 497.732 16.721 498.709 16.6885C499.702 16.6559 500.556 16.6234 501.272 16.5908V10.5605C501.272 9.17708 501.248 7.97266 501.199 6.94727C501.167 5.9056 501.118 5.01042 501.053 4.26172C501.004 3.49674 500.931 2.86198 500.833 2.35742C500.752 1.85286 500.662 1.42969 500.564 1.08789V0.990234H506.424V1.08789C506.326 1.42969 506.229 1.85286 506.131 2.35742C506.049 2.86198 505.976 3.49674 505.911 4.26172C505.846 5.01042 505.797 5.9056 505.765 6.94727C505.732 7.97266 505.716 9.17708 505.716 10.5605V26.4541C505.716 27.8376 505.732 29.0501 505.765 30.0918C505.797 31.1172 505.846 32.0042 505.911 32.7529C505.976 33.5016 506.049 34.1283 506.131 34.6328C506.229 35.1374 506.326 35.5605 506.424 35.9023V36H500.564V35.9023C500.662 35.5605 500.752 35.1374 500.833 34.6328C500.931 34.1283 501.004 33.5016 501.053 32.7529C501.118 32.0042 501.167 31.1172 501.199 30.0918C501.248 29.0501 501.272 27.8376 501.272 26.4541V19.252ZM529.08 27.748C528.641 27.748 528.087 27.748 527.42 27.748C526.769 27.748 526.053 27.748 525.271 27.748C524.49 27.748 523.685 27.748 522.854 27.748C522.024 27.748 521.235 27.7562 520.486 27.7725C519.738 27.7725 519.054 27.7806 518.436 27.7969C517.817 27.7969 517.337 27.7969 516.995 27.7969L516.092 29.7012C515.701 30.4824 515.368 31.166 515.091 31.752C514.814 32.3216 514.586 32.8262 514.407 33.2656C514.228 33.7051 514.098 34.0876 514.017 34.4131C513.935 34.7223 513.895 35.0153 513.895 35.292C513.895 35.471 513.903 35.6094 513.919 35.707C513.935 35.7884 513.96 35.8535 513.992 35.9023V36H509.695V35.9023C509.809 35.7884 509.988 35.5443 510.232 35.1699C510.477 34.7793 510.753 34.3073 511.062 33.7539C511.388 33.2005 511.73 32.5739 512.088 31.874C512.462 31.1742 512.828 30.4499 513.187 29.7012L523.147 9.14453H524.979L534.744 29.7012C535.118 30.4824 535.493 31.2311 535.867 31.9473C536.258 32.6634 536.616 33.3063 536.941 33.876C537.267 34.4294 537.552 34.8932 537.796 35.2676C538.04 35.6257 538.203 35.8372 538.284 35.9023V36H532.034C532.067 35.8698 532.083 35.7559 532.083 35.6582C532.083 35.5443 532.083 35.4222 532.083 35.292C532.083 34.9339 532.002 34.5026 531.839 33.998C531.692 33.4935 531.505 32.9808 531.277 32.46C531.066 31.9229 530.838 31.4102 530.594 30.9219C530.366 30.4336 530.179 30.0267 530.032 29.7012L529.08 27.748ZM517.947 25.8438H519.437C520.12 25.8438 520.844 25.8438 521.609 25.8438C522.391 25.8275 523.172 25.8193 523.953 25.8193C524.734 25.8193 525.491 25.8193 526.224 25.8193C526.956 25.8031 527.615 25.7949 528.201 25.7949L523.147 15.0039L517.947 25.8438ZM546.219 23.2559C546.544 23.3047 546.87 23.3454 547.195 23.3779C547.537 23.3942 547.863 23.4023 548.172 23.4023C550.206 23.4023 551.744 22.8571 552.786 21.7666C553.844 20.6761 554.373 19.0404 554.373 16.8594C554.373 15.069 553.95 13.653 553.104 12.6113C552.273 11.5697 551.045 11.0488 549.417 11.0488C548.896 11.0488 548.432 11.0732 548.025 11.1221C547.635 11.1546 547.301 11.1953 547.024 11.2441C546.715 11.3092 546.447 11.3743 546.219 11.4395V23.2559ZM549.954 24.8428C549.629 24.8916 549.303 24.9242 548.978 24.9404C548.668 24.9404 548.351 24.9404 548.025 24.9404C547.765 24.9404 547.48 24.9323 547.171 24.916C546.862 24.8997 546.544 24.8753 546.219 24.8428V26.0391C546.219 27.4876 546.235 28.7572 546.268 29.8477C546.3 30.9219 546.341 31.8496 546.39 32.6309C546.455 33.4121 546.528 34.0713 546.609 34.6084C546.691 35.1292 546.788 35.5605 546.902 35.9023V36H541.263V35.9023C541.377 35.5605 541.474 35.1211 541.556 34.584C541.653 34.0469 541.727 33.3877 541.775 32.6064C541.84 31.8089 541.889 30.8649 541.922 29.7744C541.954 28.6839 541.971 27.4062 541.971 25.9414V19.7891C541.971 18.3242 541.954 17.0547 541.922 15.9805C541.889 14.89 541.84 13.9541 541.775 13.1729C541.727 12.3753 541.653 11.708 541.556 11.1709C541.474 10.6338 541.377 10.1943 541.263 9.85254V9.75488C541.523 9.77116 541.8 9.78743 542.093 9.80371C542.337 9.81999 542.605 9.83626 542.898 9.85254C543.208 9.85254 543.517 9.85254 543.826 9.85254C544.347 9.85254 545.12 9.80371 546.146 9.70605C547.171 9.6084 548.375 9.55957 549.759 9.55957C551.159 9.55957 552.428 9.73047 553.567 10.0723C554.723 10.4141 555.708 10.9023 556.521 11.5371C557.352 12.1719 557.986 12.945 558.426 13.8564C558.882 14.7679 559.109 15.7852 559.109 16.9082C559.109 17.7871 558.987 18.5928 558.743 19.3252C558.499 20.0413 558.157 20.6924 557.718 21.2783C557.278 21.848 556.757 22.3525 556.155 22.792C555.553 23.2314 554.886 23.6139 554.153 23.9395L559.256 31.1416C559.695 31.7275 560.135 32.2891 560.574 32.8262C561.03 33.3633 561.461 33.8434 561.868 34.2666C562.275 34.6898 562.658 35.0479 563.016 35.3408C563.374 35.6175 563.675 35.8047 563.919 35.9023V36H557.522C557.522 35.8535 557.417 35.6012 557.205 35.2432C557.01 34.8688 556.774 34.4863 556.497 34.0957C556.237 33.6888 555.968 33.2982 555.691 32.9238C555.431 32.5495 555.236 32.2728 555.105 32.0938L549.954 24.8428ZM578.104 14.8574H577.615C577.518 14.5807 577.355 14.2308 577.127 13.8076C576.915 13.3844 576.622 12.9694 576.248 12.5625C575.89 12.1556 575.442 11.8138 574.905 11.5371C574.368 11.2441 573.725 11.0977 572.977 11.0977C572.407 11.0977 571.894 11.1953 571.438 11.3906C570.999 11.5697 570.625 11.8219 570.315 12.1475C570.006 12.473 569.77 12.8636 569.607 13.3193C569.445 13.7588 569.363 14.2389 569.363 14.7598C569.363 15.6061 569.616 16.4118 570.12 17.1768C570.641 17.9417 571.284 18.7067 572.049 19.4717C572.814 20.2204 573.644 20.9772 574.539 21.7422C575.434 22.5072 576.264 23.3047 577.029 24.1348C577.794 24.9648 578.429 25.8438 578.934 26.7715C579.454 27.6992 579.715 28.6921 579.715 29.75C579.715 30.5312 579.568 31.3369 579.275 32.167C578.999 32.9971 578.543 33.7458 577.908 34.4131C577.273 35.0804 576.46 35.6257 575.467 36.0488C574.474 36.4883 573.27 36.708 571.854 36.708C571.072 36.708 570.324 36.6429 569.607 36.5127C568.908 36.3825 568.257 36.2197 567.654 36.0244C567.068 35.8454 566.539 35.6501 566.067 35.4385C565.612 35.2106 565.229 34.999 564.92 34.8037L565.359 30.1895H565.872C566.035 30.7591 566.271 31.3288 566.58 31.8984C566.906 32.4681 567.296 32.9889 567.752 33.4609C568.224 33.9167 568.769 34.291 569.388 34.584C570.022 34.8607 570.747 34.999 571.561 34.999C572.13 34.999 572.667 34.9095 573.172 34.7305C573.676 34.5352 574.108 34.2666 574.466 33.9248C574.84 33.583 575.133 33.168 575.345 32.6797C575.556 32.1751 575.662 31.6136 575.662 30.9951C575.662 30.2627 575.516 29.5872 575.223 28.9688C574.93 28.334 574.539 27.7318 574.051 27.1621C573.562 26.5762 573.009 26.0146 572.391 25.4775C571.788 24.9404 571.162 24.3952 570.511 23.8418C569.86 23.2884 569.225 22.7269 568.606 22.1572C568.004 21.5713 567.459 20.9447 566.971 20.2773C566.482 19.61 566.092 18.902 565.799 18.1533C565.506 17.3883 565.359 16.5501 565.359 15.6387C565.359 14.6784 565.563 13.8158 565.97 13.0508C566.377 12.2858 566.914 11.6429 567.581 11.1221C568.248 10.585 569.013 10.1781 569.876 9.90137C570.739 9.6084 571.634 9.46191 572.562 9.46191C573.245 9.46191 573.88 9.51074 574.466 9.6084C575.068 9.70605 575.605 9.82812 576.077 9.97461C576.565 10.1048 576.989 10.2432 577.347 10.3896C577.705 10.5199 577.998 10.6257 578.226 10.707L578.104 14.8574ZM603.763 23.4512C603.258 23.4512 602.632 23.4512 601.883 23.4512C601.134 23.4349 600.32 23.4186 599.441 23.4023C598.562 23.3861 597.651 23.3779 596.707 23.3779C595.763 23.3617 594.852 23.3535 593.973 23.3535C593.143 23.3535 592.361 23.3617 591.629 23.3779C590.913 23.3942 590.294 23.4186 589.773 23.4512V25.9414C589.773 27.4062 589.79 28.6839 589.822 29.7744C589.855 30.8649 589.896 31.8089 589.944 32.6064C590.009 33.3877 590.083 34.0469 590.164 34.584C590.245 35.1211 590.343 35.5605 590.457 35.9023V36H584.817V35.9023C584.931 35.5605 585.029 35.1211 585.11 34.584C585.208 34.0469 585.281 33.3877 585.33 32.6064C585.395 31.8089 585.444 30.8649 585.477 29.7744C585.509 28.6839 585.525 27.4062 585.525 25.9414V19.7891C585.525 18.3242 585.509 17.0547 585.477 15.9805C585.444 14.89 585.395 13.9541 585.33 13.1729C585.281 12.3753 585.208 11.708 585.11 11.1709C585.029 10.6338 584.931 10.1943 584.817 9.85254V9.75488H590.457V9.85254C590.343 10.1943 590.245 10.6338 590.164 11.1709C590.083 11.708 590.009 12.3753 589.944 13.1729C589.896 13.9541 589.855 14.89 589.822 15.9805C589.79 17.0547 589.773 18.3242 589.773 19.7891V21.4492H593.362C594.257 21.4492 595.201 21.4492 596.194 21.4492C597.187 21.4329 598.147 21.4248 599.075 21.4248C600.003 21.4085 600.874 21.3923 601.688 21.376C602.501 21.3597 603.193 21.3353 603.763 21.3027V19.7891C603.763 18.3242 603.746 17.0547 603.714 15.9805C603.681 14.89 603.632 13.9541 603.567 13.1729C603.519 12.3753 603.453 11.708 603.372 11.1709C603.291 10.6338 603.193 10.1943 603.079 9.85254V9.75488H608.719V9.85254C608.605 10.1943 608.499 10.6338 608.401 11.1709C608.32 11.708 608.247 12.3753 608.182 13.1729C608.133 13.9541 608.092 14.89 608.06 15.9805C608.027 17.0547 608.011 18.3242 608.011 19.7891V25.9414C608.011 27.4062 608.027 28.6839 608.06 29.7744C608.092 30.8649 608.133 31.8089 608.182 32.6064C608.247 33.3877 608.32 34.0469 608.401 34.584C608.499 35.1211 608.605 35.5605 608.719 35.9023V36H603.079V35.9023C603.193 35.5605 603.291 35.1211 603.372 34.584C603.453 34.0469 603.519 33.3877 603.567 32.6064C603.632 31.8089 603.681 30.8649 603.714 29.7744C603.746 28.6839 603.763 27.4062 603.763 25.9414V23.4512ZM631.082 27.748C630.643 27.748 630.089 27.748 629.422 27.748C628.771 27.748 628.055 27.748 627.273 27.748C626.492 27.748 625.687 27.748 624.856 27.748C624.026 27.748 623.237 27.7562 622.488 27.7725C621.74 27.7725 621.056 27.7806 620.438 27.7969C619.819 27.7969 619.339 27.7969 618.997 27.7969L618.094 29.7012C617.703 30.4824 617.369 31.166 617.093 31.752C616.816 32.3216 616.588 32.8262 616.409 33.2656C616.23 33.7051 616.1 34.0876 616.019 34.4131C615.937 34.7223 615.896 35.0153 615.896 35.292C615.896 35.471 615.905 35.6094 615.921 35.707C615.937 35.7884 615.962 35.8535 615.994 35.9023V36H611.697V35.9023C611.811 35.7884 611.99 35.5443 612.234 35.1699C612.479 34.7793 612.755 34.3073 613.064 33.7539C613.39 33.2005 613.732 32.5739 614.09 31.874C614.464 31.1742 614.83 30.4499 615.188 29.7012L625.149 9.14453H626.98L636.746 29.7012C637.12 30.4824 637.495 31.2311 637.869 31.9473C638.26 32.6634 638.618 33.3063 638.943 33.876C639.269 34.4294 639.554 34.8932 639.798 35.2676C640.042 35.6257 640.205 35.8372 640.286 35.9023V36H634.036C634.069 35.8698 634.085 35.7559 634.085 35.6582C634.085 35.5443 634.085 35.4222 634.085 35.292C634.085 34.9339 634.004 34.5026 633.841 33.998C633.694 33.4935 633.507 32.9808 633.279 32.46C633.068 31.9229 632.84 31.4102 632.596 30.9219C632.368 30.4336 632.181 30.0267 632.034 29.7012L631.082 27.748ZM619.949 25.8438H621.438C622.122 25.8438 622.846 25.8438 623.611 25.8438C624.393 25.8275 625.174 25.8193 625.955 25.8193C626.736 25.8193 627.493 25.8193 628.226 25.8193C628.958 25.8031 629.617 25.7949 630.203 25.7949L625.149 15.0039L619.949 25.8438Z" fill="white" />
        </svg>
        {/* <div>lorem20</div> */}


        <div className="flex justify-center items-center mt-4">
          <p className="text-lg sm:text-2xl text-black dark:text-white mt-2">
            {curr} . . .
          </p>
          <div className="text-lg ml-2 dark:bg-gray-300 bg-gray-800 w-[1px] h-6 blink"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
