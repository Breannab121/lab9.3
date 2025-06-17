Interface ContentSwitcher {
    showOn: Boolean;
    message: String;
}


function ContentSwitcher ({ showOn, Message }: ContentSwitcherProps) {
    let statusIndicator;
    if (toggle.isOn) {
        statusIndicator = <button style={{ color: green}}>On</button>; 
    } else if (toggle.isOFf) {
        statusIndicator = <button style={{ color: red}}>Off</button>;
    } else { 
} 

return (
    <div>
      Toggle: {toggle} - Status: {statusIndicator}
    </div>
  )
}


function ContentSwitcher () {
    const [toggleOn, togglerOff] = usesState(true);
    return (
        <div>
            <WarningBanner showWarning={warningVisible} message="The button is on!" />
            <button onClick={() => setWarningVisible(prev => !prev)}>
                Toggle Warning
            </button>
             {!warningVisible && <p>(Warning banner is currently hidden because it returned null)</p>}
        </div>
    )
}

export default ContentSwitcher