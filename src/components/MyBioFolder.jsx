import UseContext from '../Context'
import { useContext, useState } from "react";
import Draggable from 'react-draggable'
import { motion } from 'framer-motion';
import About from '../assets/ipng.png'
import bioPC from '../assets/bio_pc.png'
import tech from '../assets/tech.png'
import hobby from '../assets/hobby.png'
import '../css/MyBioFolder.css'


function MyBioFolder() {

  const [generalTap, setGenerapTap] = useState(true)
  const [technologyTap, setTechnologyTap] = useState(false)
  const [hobbTap, setHobbTap] = useState(false)

  const { 
    themeDragBar,
    MybioExpand, setMybioExpand,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
   } = useContext(UseContext);

   const technologyText = ( // don't have to use DangerousHTML
    <>
        I mainly use <span>JavaScript</span> and <span>React</span> 
        to create user-friendly interfaces, often incorporating <span>Tailwind</span> CSS for styling. 
        I've also developed full-stack projects with <span>Node.js</span>, 
        <span>Express</span>, <span>MongoDB</span> and 
        <span>MySQL</span> by bringing together the front end and back end 
        for seamless applications.
    </>
  );

  const bioText = ( // don't have to use DangerousHTML
    <>
        Hi, I'm <span>Ridho Assuryadi</span>, a <span>Creative Thinker</span> from Indonesia.
        Currently working as Engineering Manager at <a href="https://redantcolony.com" target="_blank" rel="noopener noreferrer" className="bio_link">Red Ant Colony</a> and
        Co-founder at <a href="https://treonstudio.com" target="_blank" rel="noopener noreferrer" className="bio_link">Treon</a>.
        <br /><br />
        Besides my main activities, I'm building small businesses in pet hobby at <a href="https://himajinhobby.com" target="_blank" rel="noopener noreferrer" className="bio_link">HimajinHobby</a>,
        small-scale property at <a href="https://tempat-teduh.com" target="_blank" rel="noopener noreferrer" className="bio_link">tempat-teduh</a>, and
        jotting down ideas at <a href="https://buahpikir.com" target="_blank" rel="noopener noreferrer" className="bio_link">BuahPikir</a>.
        <br /><br />
        I'm also active in several communities such as <a href="https://kalseljs.com" target="_blank" rel="noopener noreferrer" className="bio_link">kalseljs</a>, <a href="https://literasibanua.com" target="_blank" rel="noopener noreferrer" className="bio_link">literasibanua</a>, and other non-profit organizations.
    </>
  );

  const hobbyText = ( // don't have to use DangerousHTML
    <>
        In my free time, I love gaming with friends. 
        When I'm not at my computer, I make an effort 
        to hit the gym, discover new restaurants, 
        and go on adventures like hiking. 
        I played basketball in high school and would love to 
        get back into it!
    </>
  );

      function handleDragStop(event, data) {
        const positionX = data.x 
        const positionY = data.y
        setMybioExpand(prev => ({
          ...prev,
          x: positionX,
          y: positionY
        }))

      }


  function handleBiotap(name) {
    setGenerapTap(name === 'general');
    setTechnologyTap(name === 'technology');
    setHobbTap(name === 'hobby');
  }

  const activeBtnStyle = {
    bottom: '2px',
    outline: '1px dotted black',
    outlineOffset: '-5px',
    borderBottomColor: '#c5c4c4',
    zIndex: '3'
  };


  return (
    <>
      <Draggable
        axis="both" 
        handle={'.folder_dragbar'}
        grid={[1, 1]}
        scale={1}
        disabled={MybioExpand.expand}
        bounds={{top: 0}}
        defaultPosition={{ 
          x: window.innerWidth <= 500 ? 35 : 70,
          y: window.innerWidth <= 500 ? 35 : 40,
        }}
        onStop={(event, data) => handleDragStop(event, data)}
        onStart={() => handleSetFocusItemTrue('About')}
      >
        <motion.div className='bio_folder' 
            onClick={(e) => {
              e.stopPropagation();
              handleSetFocusItemTrue('About');
            }}
            style={ MybioExpand.expand ? inlineStyleExpand('About') : inlineStyle('About')}>
          <div className="folder_dragbar"
             style={{ background: MybioExpand.focusItem? themeDragBar : '#757579'}}
          >
            <div className="bio_barname">
              <img src={About} alt="About" />
              <span>About</span>
            </div>
            <div className="bio_barbtn">
              <div onClick={ !isTouchDevice ? (e) => {
                e.stopPropagation()
                setMybioExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('About')
              } : undefined
              }   
                onTouchEnd={(e) => {
                e.stopPropagation()
                setMybioExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('About')
              }}
              onTouchStart={(e) => e.stopPropagation()}
              >
                <p className='dash'></p>
              </div>

                <div>
                <p className='x'
                  onClick={!isTouchDevice ? () => {
                    deleteTap('About')
                    handleBiotap('general')
                  }: undefined}
                  onTouchEnd={() => {
                    deleteTap('About')
                    handleBiotap('general')
                  }}
                >×
                </p>
              </div>
            </div>
          </div>
          <div className="file_tap_container-bio">
          <p  onClick={() => handleBiotap('general')}
              style={generalTap ? activeBtnStyle : {}}
          >General
          </p>
          <p onClick={() => handleBiotap('technology')}
              style={technologyTap ? activeBtnStyle : {}}
          >Technology
          </p>
          <p onClick={() => handleBiotap('hobby')}
                  style={hobbTap ? activeBtnStyle : {}}
          >Hobby
          </p>
          </div>
          <div className="folder_content">
            <div className="folder_content-bio">
            <img
              alt="bioPC"
              className="bio_img_other"
              src={generalTap? bioPC : (technologyTap ? tech : hobby)}
            />
            <div
              className="biotext_container">

              <p className="bio_text_1_other">
                {generalTap? bioText : technologyTap? technologyText : hobbyText}
              </p>
            </div>
              
            </div>
            <div className="bio_btn_container">
              <div className="bio_btn_ok"
              onClick={!isTouchDevice ? () => {
                deleteTap('About')
                handleBiotap('general')
              } : undefined}
              onTouchEnd={() => {
                deleteTap('About')
                handleBiotap('general')
              }}
              >
                <span>
                  OK
                </span>
              </div>
              <div className="bio_btn_cancel"
              onClick={!isTouchDevice ? () => {
                deleteTap('About')
                handleBiotap('general')
              } : undefined}
              onTouchEnd={() => {
                deleteTap('About')
                handleBiotap('general')
              }}
              ><span>Cancel</span></div>
            </div>
          </div>
        </motion.div>
      </Draggable>
    </>
  )
}          

export default MyBioFolder
