const Accordion = (props) => {
  return (
    <div className="Accordion">
      <p>アコーディオン</p>
      {props.children}
    </div>
  );
}

export default Accordion;