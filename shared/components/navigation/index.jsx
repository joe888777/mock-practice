import { css } from '@emotion/react';
import Link from 'next/link';

const style = css`background-color: #16b9b3;
display:flex;
justify-content:flex-end;`;
const nav_style = css`
  background-color: #16b9b3;
  padding:12px 0 20px 0;
  max-width:800px;
`;
const ul_style = css`
  display:flex;
  flex-wrap:wrap;
  & > li{
    margin-right:20px;
     > span {
      color:rgba(255,255,255,0.7);
      > a{
        color:rgba(255,255,255,0.7);
        text-decoration:none;
        white-space:no-wrap;
        &:hover{
          color:#fff;
        }
        }
      > button{
        background:unset;
        border:none;
        color:rgba(255,255,255,0.7);
      }
    }
  }
`;
const Arrow = () => {
  return (
    <svg className="svg-icon" aria-hidden="true" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 20 12"><polygon fill="" fillRule="evenodd" points="1319.899 365.778 1327.678 358 1329.799 360.121 1319.899 370.021 1310 360.121 1312.121 358" transform="translate(-1310 -358)" /></svg>
  );
};
// const anotherStyle = css({
//     textDecoration: 'underline'
//   })

const Navigation = () => {
  const home = '';
  return (
    <div css={style}>
      <nav css={nav_style}>

        <ul css={ul_style}>
          <li>
            <span>
              <Link href={home}>新增資源</Link>
            </span>
          </li>
          <li>
            <span>
              <Link href={home}>
                島島學習資源
              </Link>
              <button>
                <Arrow />
              </button>
            </span>
          </li>
          <li>
            <span>
              <Link href={home}>島島學習社群</Link>
            </span>
          </li>
          <li>
            <span>
              <Link href={home}>島島活動消息</Link>
            </span>
          </li>
          <li>
            <span>
              <Link href={home}>島島教育場域</Link>
            </span>
          </li>
          <li>
            <span>
              <Link href={home}>關於我們</Link>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
