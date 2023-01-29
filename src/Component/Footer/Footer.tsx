import React from 'react';
import { FC } from 'react';
import "./Footer.scss"

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__logoAboutBlock">
          <div className="footer__content__logoAboutBlock__border">
            <div className="footer__content__logoAboutBlock__border__logoBox">
              <a href="{{ url('/') }}">
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="29"
                  viewBox="0 0 130 29" fill="none">
                  <path
                    d="M122.192 14.0758H116.288C116.288 12.0792 115.653 10.3322 114.384 8.73494C112.92 6.88813 110.968 5.98966 108.577 5.98966H102.477V0H108.382C112.188 0 115.409 1.34771 118.142 4.09298C120.875 6.83825 122.192 10.1326 122.192 14.0758ZM108.431 15.3236V29H102.526V15.3236H108.431ZM130 29L116.288 15.3735H108.821L122.534 29H130ZM61.9745 21.0637L51.1411 0.798642L36.2575 29H42.7966L46.9933 21.0637H61.9745ZM28.2545 29L13.7125 15.3236H6.24624L20.7883 29H28.2545ZM28.6937 0L13.7125 14.0758H6.24624L21.2275 0H28.6937ZM94.5233 15.1239C94.5233 23.0602 88.8138 29 83.2507 29H69.8799V23.0103H79.054C84.1291 23.0103 88.277 21.3133 88.277 15.1239C88.277 8.98451 84.1291 7.23751 79.054 7.23751H69.8799V1.24785H83.2507C89.1554 1.24785 94.5233 7.1876 94.5233 15.1239ZM5.95346 15.3735V29H0V15.3735H5.95346Z"
                    fill="black" />
                </svg>
              </a>
            </div>
            <div className="footer__content__logoAboutBlock__border__aboutBox">
              <p><span></span>Դարձեք ավելի ներկայանալի Kadr-ի օգնությամբ, ձեռք բերեք նոր հնարավորություններ
                համագործակցելու և ոչ միայն:</p>
            </div>
          </div>
          <div className="footer__content__logoAboutBlock__followUsBlock">
            <div className="footer__content__logoAboutBlock__followUsBlock__heading">
              <p>Հետևեք մեզ</p>
            </div>
            <div className="footer__content__logoAboutBlock__followUsBlock__iconBox">
              <div className="footer__content__logoAboutBlock__followUsBlock__iconBox__instagram">
                <a href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"
                    viewBox="0 0 31 31" fill="none">
                    <path
                      d="M23.3558 30L6.68917 30.0158C3.0225 30.0192 0.0200028 27.0225 0.0158362 23.3558L2.77818e-06 6.68917C-0.00333056 3.0225 2.99334 0.0200028 6.66 0.0158362L23.3267 2.77818e-06C26.9933 -0.00333056 29.9958 2.99334 30 6.66L30.0158 23.3267C30.02 26.9942 27.0225 29.9967 23.3558 30Z"
                      fill="url(#paint0_radial_1578_2444)" />
                    <path
                      d="M23.3558 30L6.68917 30.0158C3.0225 30.0192 0.0200028 27.0225 0.0158362 23.3558L2.77818e-06 6.68917C-0.00333056 3.0225 2.99334 0.0200028 6.66 0.0158362L23.3267 2.77818e-06C26.9933 -0.00333056 29.9958 2.99334 30 6.66L30.0158 23.3267C30.02 26.9942 27.0225 29.9967 23.3558 30Z"
                      fill="url(#paint1_radial_1578_2444)" />
                    <path
                      d="M15.0072 20.8417C11.7913 20.8417 9.17383 18.225 9.17383 15.0084C9.17383 11.7917 11.7913 9.17505 15.0072 9.17505C18.223 9.17505 20.8405 11.7917 20.8405 15.0084C20.8405 18.225 18.223 20.8417 15.0072 20.8417ZM15.0072 10.8417C12.7097 10.8417 10.8405 12.7109 10.8405 15.0084C10.8405 17.3059 12.7097 19.175 15.0072 19.175C17.3047 19.175 19.1738 17.3059 19.1738 15.0084C19.1738 12.7109 17.3047 10.8417 15.0072 10.8417Z"
                      fill="white" />
                    <path
                      d="M21.2578 10.0083C21.9482 10.0083 22.5078 9.44866 22.5078 8.7583C22.5078 8.06794 21.9482 7.5083 21.2578 7.5083C20.5675 7.5083 20.0078 8.06794 20.0078 8.7583C20.0078 9.44866 20.5675 10.0083 21.2578 10.0083Z"
                      fill="white" />
                    <path
                      d="M20.0072 25.8417H10.0072C6.79133 25.8417 4.17383 23.225 4.17383 20.0084V10.0084C4.17383 6.79172 6.79133 4.17505 10.0072 4.17505H20.0072C23.223 4.17505 25.8405 6.79172 25.8405 10.0084V20.0084C25.8405 23.225 23.223 25.8417 20.0072 25.8417ZM10.0072 5.84172C7.70966 5.84172 5.84049 7.71088 5.84049 10.0084V20.0084C5.84049 22.3059 7.70966 24.175 10.0072 24.175H20.0072C22.3047 24.175 24.1738 22.3059 24.1738 20.0084V10.0084C24.1738 7.71088 22.3047 5.84172 20.0072 5.84172H10.0072Z"
                      fill="white" />
                    <defs>
                      <radialGradient id="paint0_radial_1578_2444" cx="0" cy="0"
                        r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(11.1583 30.0375) scale(37.4158)">
                        <stop stop-color="#FFDD55" />
                        <stop offset="0.328" stop-color="#FF543F" />
                        <stop offset="0.348" stop-color="#FC5245" />
                        <stop offset="0.504" stop-color="#E64771" />
                        <stop offset="0.643" stop-color="#D53E91" />
                        <stop offset="0.761" stop-color="#CC39A4" />
                        <stop offset="0.841" stop-color="#C837AB" />
                      </radialGradient>
                      <radialGradient id="paint1_radial_1578_2444" cx="0" cy="0"
                        r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(4.83 -0.374745) scale(24.8442 16.5537)">
                        <stop stop-color="#4168C9" />
                        <stop offset="0.999" stop-color="#4168C9" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
              </div>
              <div className="footer__content__logoAboutBlock__followUsBlock__iconBox__facebook">
                <a href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"
                    viewBox="0 0 31 31" fill="none">
                    <path
                      d="M23.3636 30.0083L6.69698 30.0241C3.03032 30.0275 0.0278153 27.0308 0.0236487 23.3641L0.00781528 6.69747C0.00448194 3.0308 3.00115 0.0283036 6.66782 0.0241369L23.3345 0.00830356C27.0011 0.00497023 30.0036 3.00164 30.0078 6.6683L30.0236 23.335C30.0278 27.0025 27.0303 30.005 23.3636 30.0083Z"
                      fill="url(#paint0_linear_1578_2450)" />
                    <path
                      d="M11.7307 30.0083H16.9656V16.8976H20.618L21.0078 12.5081H16.9659C16.9659 12.5081 16.9659 10.8692 16.9659 10.0084C16.9659 8.97368 17.1738 8.56461 18.1746 8.56461C18.9797 8.56461 21.0078 8.56461 21.0078 8.56461V4.0083C21.0078 4.0083 18.0209 4.0083 17.3827 4.0083C13.4873 4.0083 11.7307 5.72416 11.7307 9.00807C11.7307 11.8693 11.7307 12.5081 11.7307 12.5081H9.00781V16.9527H11.7307V30.0083Z"
                      fill="white" />
                    <defs>
                      <linearGradient id="paint0_linear_1578_2450" x1="15.0157" y1="0.00830078"
                        x2="15.0157" y2="30.0241" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CA0EC" />
                        <stop offset="1" stop-color="#026AE3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content__footerLinks">
          <div className="footer__content__footerLinks__informationBlock">
            <ul>
              <li className="infoBox">
                <div className="infoBox__headingIconsBlock">
                  <div className="infoBox__headingIconsBlock__heading">Տեղեկատվություն</div>
                  <div className="infoBox__headingIconsBlock__iconsArrow">
                    <span className="defaultIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10"
                        viewBox="0 0 17 10" fill="none">
                        <path
                          d="M7.61749 9.67312C8.09524 10.109 8.89149 10.109 9.42233 9.67312L16.6417 3.08717C17.1194 2.60291 17.1194 1.87651 16.6417 1.44068L15.4208 0.326876C14.8899 -0.108959 14.0937 -0.108959 13.6159 0.326876L8.46682 5.02421L3.3708 0.326876C2.89305 -0.108959 2.0968 -0.108959 1.56596 0.326876L0.398127 1.44068C-0.13271 1.87651 -0.13271 2.60291 0.398127 3.08717L7.61749 9.67312Z"
                          fill="#2A343E" />
                      </svg>
                    </span>
                    <span className="activeIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10"
                        viewBox="0 0 17 10" fill="none">
                        <path
                          d="M7.61749 9.67312C8.09524 10.109 8.89149 10.109 9.42233 9.67312L16.6417 3.08717C17.1194 2.60291 17.1194 1.87651 16.6417 1.44068L15.4208 0.326876C14.8899 -0.108959 14.0937 -0.108959 13.6159 0.326876L8.46682 5.02421L3.3708 0.326876C2.89305 -0.108959 2.0968 -0.108959 1.56596 0.326876L0.398127 1.44068C-0.13271 1.87651 -0.13271 2.60291 0.398127 3.08717L7.61749 9.67312Z"
                          fill="#058187" />
                      </svg>
                    </span>
                  </div>
                </div>
                <ul>
                  <li className="infoLink">
                    <a href="#">Մեր մասին</a>
                  </li>
                  <li className="infoLink">
                    <a href="#">Գովազդ</a>
                  </li>
                  <li className="infoLink">
                    <a href="#">Դիմում</a> | <a href="#">Բողոք</a> | <a
                      href="#">Առաջարկ</a>
                  </li>
                  <li className="infoLink">
                    <a href="#">Օգնություն</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer__content__footerLinks__feedbackBlock">
            <ul>
              <li className="feedbackBox">
                <div className="feedbackBox__headingIconsBlock">
                  <div className="feedbackBox__headingIconsBlock__heading">Հետադարձ կապ</div>
                  <div className="feedbackBox__headingIconsBlock__iconsArrow">
                    <span className="defaultIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10"
                        viewBox="0 0 17 10" fill="none">
                        <path
                          d="M7.61749 9.67312C8.09524 10.109 8.89149 10.109 9.42233 9.67312L16.6417 3.08717C17.1194 2.60291 17.1194 1.87651 16.6417 1.44068L15.4208 0.326876C14.8899 -0.108959 14.0937 -0.108959 13.6159 0.326876L8.46682 5.02421L3.3708 0.326876C2.89305 -0.108959 2.0968 -0.108959 1.56596 0.326876L0.398127 1.44068C-0.13271 1.87651 -0.13271 2.60291 0.398127 3.08717L7.61749 9.67312Z"
                          fill="#2A343E" />
                      </svg>
                    </span>
                    <span className="activeIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10"
                        viewBox="0 0 17 10" fill="none">
                        <path
                          d="M7.61749 9.67312C8.09524 10.109 8.89149 10.109 9.42233 9.67312L16.6417 3.08717C17.1194 2.60291 17.1194 1.87651 16.6417 1.44068L15.4208 0.326876C14.8899 -0.108959 14.0937 -0.108959 13.6159 0.326876L8.46682 5.02421L3.3708 0.326876C2.89305 -0.108959 2.0968 -0.108959 1.56596 0.326876L0.398127 1.44068C-0.13271 1.87651 -0.13271 2.60291 0.398127 3.08717L7.61749 9.67312Z"
                          fill="#058187" />
                      </svg>
                    </span>
                  </div>
                </div>
                <ul>
                  <li className="emailBox">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15"
                        viewBox="0 0 20 15" fill="none">
                        <path
                          d="M19.6094 4.96094C18.7109 5.66406 17.5781 6.52344 13.5938 9.41406C12.8125 10 11.3672 11.2891 10 11.2891C8.59375 11.2891 7.1875 10 6.36719 9.41406C2.38281 6.52344 1.25 5.66406 0.351562 4.96094C0.195312 4.84375 0 4.96094 0 5.15625V13.125C0 14.1797 0.820312 15 1.875 15H18.125C19.1406 15 20 14.1797 20 13.125V5.15625C20 4.96094 19.7656 4.84375 19.6094 4.96094ZM10 10C10.8984 10.0391 12.1875 8.86719 12.8516 8.39844C18.0469 4.64844 18.4375 4.29688 19.6094 3.35938C19.8438 3.20312 20 2.92969 20 2.61719V1.875C20 0.859375 19.1406 0 18.125 0H1.875C0.820312 0 0 0.859375 0 1.875V2.61719C0 2.92969 0.117188 3.20312 0.351562 3.35938C1.52344 4.29688 1.91406 4.64844 7.10938 8.39844C7.77344 8.86719 9.0625 10.0391 10 10Z"
                          fill="#2E3031" />
                      </svg>
                    </span>
                    <a href="#">support@kadr.am</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* @if (!Session::get('id')) */}
      <div className="footer__bg">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="627" height="372" viewBox="0 0 627 372"
            fill="none">
            <path
              d="M424.5 144.5C468.5 50.5 577.5 8.66667 627 0V372H0C23.2 289.2 145.167 249 205.5 241.5C263 236 380.5 238.5 424.5 144.5Z"
              fill="#058187" fill-opacity="0.16" />
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="526" height="312" viewBox="0 0 526 312"
            fill="none">
            <path
              d="M356.12 121.194C393.032 42.3548 484.474 7.26882 526 0V312H0C19.4628 242.555 121.783 208.839 172.397 202.548C220.635 197.935 319.207 200.032 356.12 121.194Z"
              fill="#058187" fill-opacity="0.16" />
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="320" height="149" viewBox="0 0 320 149"
            fill="none">
            <path
              d="M216.651 57.8777C239.107 20.2271 294.737 3.47133 320 0V149H0C11.8405 115.835 74.0882 99.7339 104.88 96.7298C134.226 94.5269 194.195 95.5282 216.651 57.8777Z"
              fill="#058187" fill-opacity="0.16" />
          </svg>
        </span>
      </div>
      {/* @endif */}
    </footer>
  )
}
