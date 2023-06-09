import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {title && <h1>{title}</h1>} {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
