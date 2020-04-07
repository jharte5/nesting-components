import React from 'react'
import Square from './Square'


const Body = () => {
    return(
        <div style={{
            gridArea: 'body',
            backgroundColor: 'red'
        }}>
            <img src="images/goticedragon.jpg" style={{
                width:'450px',
                height: '450px'
            }}/>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis eros non diam congue porttitor sit amet ut dui. Nam arcu nisl, suscipit non lacinia ut, venenatis eget ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec a pulvinar odio. Ut at enim mi. Nunc nec mattis purus. Curabitur pharetra dignissim mi a accumsan. Vestibulum non placerat nisl. Suspendisse consequat pharetra neque, ac lobortis nunc laoreet eu. Nullam efficitur nec justo nec lacinia. Nam pretium nunc non lectus bibendum vehicula. </p>

            <div style={{
            gridArea: 'text',
            textAlign: 'justify'
        }}>

            </div>
            <Square number='1'/>
            <Square number='2'/>
            <Square number='3'/>
            <Square number='4'/>
        </div>
    )
}

export default Body;