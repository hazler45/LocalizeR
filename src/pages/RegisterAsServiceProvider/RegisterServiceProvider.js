import React,{useState} from "react";
import RegisterAsServiceProvider from './RegisterAsServiceProvider';
import RegisterAsServiceProviderContinue from "./RegisterAsServiceProviderContinue";
export default function RegisterServiceProvider() {
    const [showRegidterAsUserContinue, setshowRegidterAsUserContinue] = useState(false);

    const handleContinueFromFormA = () => {
        setshowRegidterAsUserContinue(true);
    };
  return (
    <>
    {!showRegidterAsUserContinue ? (
        < RegisterAsServiceProvider onContinueClick={handleContinueFromFormA} />
      ) : (
        <RegisterAsServiceProviderContinue />
      )}
    </>
  );
}
