export default function Whatsapp() { 
  returm(
    <>
      <Headers />
      <Whatsapp />
    </>
  );
}

function Header() {
  return (
    <div classname="bg-dark text-light p-3 m-3">
      <div>
        <div>MyChatApp by (Tejas Chopde)(210940320129_KH)</div>
      </div>
    </div>
  );
}

function WHatsapp() {
  return (
    <div classname="">
      <input classname="m-3 p-3" type="text" placeholer="Lets chat here..." />
      <input classname="p-3" type="button" value="Send" />
    </div>
  );
}
