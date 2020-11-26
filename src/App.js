import logo from './logo.svg';
import './App.css';

export default () => {


  return (
    <div id="App">
      <p><acronym title='All Cops Are Bastards'>ACAB</acronym> wants to police the police. The initial focus is traffic stops. As someone is getting stopped, they tell their smart phone and a car is dispatched.</p>
      <p>A car answers and arrives carrying a team of five people:</p>
      <ul>
        <li>The Driver responsible for the vehicle.</li>
        <li>The Cameraperson responsible for livestreaming everything to the cloud.</li>
        <li>The Muscle responsible for any physical tasks.</li>
        <li>The Mouth responsible for interfacing with anyone external to the team.</li>
        <li>Comms responsible for tools and interfacing with the organization at large.</li>
      </ul>
      <p>The vehicle pulls in front of the stop and the Mouth followed by the Cameraperson approach the scene.</p>
      <p>One common police tactic is swarming and overpowering any opposition through shear numbers. I want the team to be able to respond by calling in five more teams of five.</p>
      <p>Are you interested in being part of a team?</p>
      <ul>
        <li>
          <button>Driver</button>
          <ol>
            <li>
              <p>Are you licensed and insured?</p>
              <ol>
                <li>No → Assistance with those processes.</li>
                <li>
                  <p>Yes → Do you have a vehicle that seats five?</p>
                  <ol>
                    <li>No → Post driver seeking vehicle.</li>
                    <li>
                      <p>Yes → Do you have access to a gun?</p>
                      <ol>
                        <li>No → Post seeking gun.</li>
                        <li>Yes → Browse potential patrols.</li>
                      </ol>
                    </li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <button>Cameraperson</button>
          <ol>
            <li>
              <p>Do you have a cell phone?</p>
              <ol>
                <li>No → Assistance with getting one.</li>
                <li>
                  <p>Yes → Do you have access to a gun?</p>
                  <ol>
                    <li>No → Post seeking gun.</li>
                    <li>Yes → Browse potential patrols.</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <button>Muscle</button>
        </li>
        <li><button>Mouth</button></li>
        <li><button>Comms</button></li>
      </ul>
    </div>
  )
}
