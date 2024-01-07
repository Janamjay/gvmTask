import { DNA } from "react-loader-spinner";

const DNALoader = () => {
  return (
    <div>
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default DNALoader;
