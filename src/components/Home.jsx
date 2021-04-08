export default function Home() {
  return (
    <div className="container">
      <div className="row vh-100 pt-2">
        <div className="left col d-none col-12 d-lg-block col-md-2 bg-primary">{/* left columns go here */}</div>
        <div className="mid col-12 col-md-6 bg-light">{/* mid columns go here  */}</div>
        <div className="right col col-12 col-md-4 bg-warning">{/* right columns go here */}</div>
      </div>
    </div>
  );
}
