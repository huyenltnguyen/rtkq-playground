import { useGetListQuery } from "./app/api";

export default function App() {
  const { isFetching, data = [] } = useGetListQuery();

  if (isFetching) {
    return <p>Loading</p>;
  }

  return (
    <div className="App">
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
