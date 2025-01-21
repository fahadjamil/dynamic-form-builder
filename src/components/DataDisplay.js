const DataDisplay = ({ data }) => {
    const renderData = (data) => {
      return (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <strong>{item.type}:</strong> {item.value}
              {item.fields && <div>{renderData(item.fields)}</div>}
            </div>
          ))}
        </div>
      );
    };
  
    return <div>{renderData(data)}</div>;
  };
  
  export default DataDisplay;
  