function Breadcrumb(props) {
  return (
    <div className="breadcrumb-div">
      <div className="container">
        <h1 className="page-title mb-0">{props.title}</h1>
        <ol className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>{props.path}</li>
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumb;
