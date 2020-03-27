import React from 'react';
const { Provider, Consumer } = React.createContext({ background: 'green' });

// Как передать данные в контекст

const ContextExampl = () => {
  return (
    <Provider value={{ foo: 'bar' }}>
      <Consumer>{value => <p>{value.foo}</p>}</Consumer>
    </Provider>
  );
};

//
const IntemediateComponent = ({ children }) => (
  <React.Fragment>{children}</React.Fragment>
);

const Root = () => (
  <React.Fragment>
    <Provider value={{ background: 'red' }}>
      <IntemediateComponent>
        <ThemedButton />
      </IntemediateComponent>
    </Provider>
    <ThemedButton />
  </React.Fragment>
);

const ThemedButton = () => (
  <Consumer>
    {({ background }) => <button style={{ background }}>Кнопка</button>}
  </Consumer>
);

export default Root;
