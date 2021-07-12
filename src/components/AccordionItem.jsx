import { Provider, Context } from "./ItemContext";

const AccordionItem = (props) => {
  return (
    <Provider panelIndex={props.panelIndex}>
      <Context.Consumer>
        {(options) => {
          return (
            <>
              <div className="AccordionItem">{props.children}</div>
            </>
          )
        }}
      </Context.Consumer>
    </Provider>
  );
};

export default AccordionItem;
