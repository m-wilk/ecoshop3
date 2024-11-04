const Bredcrumb = ({ databredcrumbs }) => {
  const lastItemIndex = databredcrumbs.length - 1;

  return (
    <div className="text-gray-500">
      {databredcrumbs.map((databredcrumb, index) => {
        return (
          <span key={databredcrumb.name}>
            <a href={databredcrumb.url}>{databredcrumb.name}</a>
            {index !== lastItemIndex ? <span> / </span> : null}
          </span>
        );
      })}
    </div>
  );
};

export default Bredcrumb;
