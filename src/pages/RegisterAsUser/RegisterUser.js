import React,{useState} from "react";
import RegisterAsUser from './RegisterAsUser';
import RegisterAsUserContinue from "./RegisterAsUserContinue";
export default function RegisterUSer() {
    const [showRegidterAsUserContinue, setshowRegidterAsUserContinue] = useState(false);

    const handleContinueFromFormA = () => {
        setshowRegidterAsUserContinue(true);
    };

  return (
    <>
    {!showRegidterAsUserContinue ? (
        < RegisterAsUser onContinueClick={handleContinueFromFormA} />
      ) : (
        <RegisterAsUserContinue />
      )}
    </>
  );
}
