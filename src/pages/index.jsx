import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Episode} from "../components/Episode"

document.querySelector("#root").innerHTML = render(
  <>
    <main>
      <Episode/>
    </main>
  </>
);

