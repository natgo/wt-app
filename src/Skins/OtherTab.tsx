import { useRecoilValue } from "recoil";

import { TabPanel } from "../Techtree/Techtree";
import { SkinCountryTab } from "../atom";

export function OtherTab(): JSX.Element {
  const countryValue = useRecoilValue(SkinCountryTab);
  return (
    <TabPanel value={countryValue} index={10}>
      <div>
        Generic Camos
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/589156/en/"
          >
            modern
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/897856/en/"
          >
            fall and winter
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/894702/en/"
          >
            ww2
          </a>
        </div>
        <br />
        Does not meet the requirements of the game
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/182530/en/"
          >
            gladiator mk2
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/230932/en/"
          >
            bf109g14
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/263641/en/"
          >
            isu152
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/130161/en/"
          >
            bf109g14
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/211629/en/"
          >
            p51d
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/38521/en/"
          >
            a6m2
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/66895/en/"
          >
            po2
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/72386/en/"
          >
            he51b2
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/73600/en/"
          >
            p80a
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/72902/en/"
          >
            bf109e3
          </a>
        </div>
        <br />
        Ei toimi
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/12202/en/"
          >
            hurricane mk2b (puuttuu blk)
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/117036/en/"
          >
            i15bis (ihan vituiks)
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/694798/en/"
          >
            i15bis (myös vituiks)
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://live.warthunder.com/post/139897/en/"
          >
            ju88a4 (ei toimi)
          </a>
        </div>
      </div>
    </TabPanel>
  );
}
