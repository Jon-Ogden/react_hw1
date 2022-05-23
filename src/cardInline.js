const CardInline = () => {
    return (
        <div style={styles.container}>
            <div style={{marginLeft: '10px'}}>
            <h3 style={{color: 'steelblue'}}>User name</h3>
            <p>about user</p>
            </div>
        </div>
    )
  }

  const styles = {
      container: {
        display: 'flex',
        height: '100px',
        width: '400px',
        border: '1px solid grey',
        borderRadius: '5px',
        boxShadow: '0 0 3px 2px grey',
        padding: '10px',
        margin: '10px'
      }
  }
  
  
  export default CardInline