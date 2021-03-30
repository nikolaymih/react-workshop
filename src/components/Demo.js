

const Demo = () => {

    const onCounterButtonClickHandler = () => {
        console.log('Increase');
    }

    return (
        <div>
            <h1>Counter</h1>
            <div>0</div>
            <button onClick={onCounterButtonClickHandler}>Icrement</button>
        </div>
    )
}

export default Demo
