import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div className="content">
    <div className="content__wrapper">
      <div className="content__rouned-border" />
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Thers is no page like this</p>
        <Link className="not-found__link link-button" to="/">
          Go to main Page
        </Link>
      </div>
    </div>
  </div>
);

export default PageNotFound;
