import stayProductive from "../images/illustration-stay-productive.png";

const StayProductive = () => {
  return (
    <section id="stay-productive" className="mt-40">
      <img
        src={stayProductive}
        alt="cartoons being productive, sketching on whiteboards"
      />
      <h2 className="font-bold text-center text-xl">
        Stay productive, wherever you are
      </h2>
      <br />
      <p className="text-sm">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <br />
      <p className="text-sm">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <br />
      <a href="" className="text-xs text-[#62E0D9]">
        See how fylo works{" "}
      </a>
    </section>
  );
};

export default StayProductive;
