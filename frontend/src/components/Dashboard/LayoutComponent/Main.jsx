
function Main(props) {
  return (
    <>
     <main className="mainn">
        <div className="helper">
          {props.children}
        </div>
      </main>
    </>
  );
}

export default Main;
