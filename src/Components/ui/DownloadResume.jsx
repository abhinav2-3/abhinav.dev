import { MdDownload } from "react-icons/md";
import { resumeURL } from "../utils/data";

const DownloadButton = () => (
  <a
    className="flex place-items-center gap-4 px-8 rounded py-2 font-semibold transition-transform duration-300 hover:-translate-y-2 p-1 text-l_textColor dark:text-d_textColor bg-l_secondary dark:bg-d_secondary"
    href={resumeURL}
    target="_blank"
    rel="noreferrer"
    download="Abhinav_Resume.pdf"
  >
    Resume <MdDownload size={20} />
  </a>
);

export default DownloadButton;
