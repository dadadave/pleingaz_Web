import { Link } from 'react-router-dom';

// Renders a react-router <Link> for internal routes (e.g. "/apropos") and a
// plain <a> for hash anchors ("#portfolio", "/#footer") or external URLs.
export default function SmartLink({ href, children, ...rest }) {
  const isRoute = href && href.startsWith('/') && !href.includes('#');
  if (isRoute) {
    return <Link to={href} {...rest}>{children}</Link>;
  }
  return <a href={href} {...rest}>{children}</a>;
}
