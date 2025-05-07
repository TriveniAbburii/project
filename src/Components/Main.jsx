import React from 'react'
import LeftSideSection from './MainContent/LeftSideSection'
import RightsideSection from './MainContent/RightsideSection'

const Main = () => {
    return (
        <>
            <div style={{ padding: "80px", display: 'flex', flexDirection: 'row' }}>
                <LeftSideSection />
                <RightsideSection /></div>
        </>
    )
}
export default Main