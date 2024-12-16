const eventdemo = () => {
    const handleclick=()=>{
        alert("Hello event");
    }
    const handleclickAgain=(name)=>{
        alert("Hello event " + name);
    }
    return(
        <>
            <h2>Events Demo</h2>
            <button onClick={handleclick}>Click me</button>
            <button onClick={() => handleclickAgain("Bhumik")}>Click me 2</button>

        </>
        );
};

export default eventdemo;