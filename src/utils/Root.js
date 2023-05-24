import * as React from 'react';

export const navigationRef = React.createRef();
export const loaderRef = React.createRef();

const dispatch = func => {
  navigationRef.current?.dispatch(func);
};

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
const replace = (name, params) => {
  navigationRef.current?.replace(name, params);
};
const goBack = () => {
  if (navigationRef.current?.goBack()) {
    navigationRef.current?.goBack();
  }
};
function popAll() {
  navigationRef.current?.popToTop();
}

const showLoader = (isCancelable = false) => {
  loaderRef?.current?.show(isCancelable);
};

const hideLoader = () => {
  loaderRef?.current?.hide();
};

export default {
  hideLoader,
  showLoader,
  popAll,
  goBack,
  navigate,
  dispatch,
  replace,
};
