import { Footer } from "./Footer";

export const getDefaultLayout =
  (): Layout =>
  // eslint-disable-next-line react/display-name
  (page) => {
    return (
      <div>
        {page}
        <Footer />
      </div>
    );
  };
