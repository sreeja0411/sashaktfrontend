import { Link } from "react-router-dom";

const Adults = () => {
  const emojiUrls = [
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3943682/9972ce838572085c86831991a48674dd/266x266-Q90_9972ce838572085c86831991a48674dd.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3943688/1fc319e8f2779d3daaa2f28ef11f105e/266x266-Q90_1fc319e8f2779d3daaa2f28ef11f105e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4055987/2a0898e9cba9fa25e19a8f4e140f949e/266x266-Q90_2a0898e9cba9fa25e19a8f4e140f949e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4055980/ca52fae306ee39866f7eaa0377582479/266x266-Q90_ca52fae306ee39866f7eaa0377582479.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015372/4c47d77a21b785c0c33e08cc26444965/266x266-Q90_4c47d77a21b785c0c33e08cc26444965.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3008658/c910675aca57dbe65794df090be0b997/266x266-Q90_c910675aca57dbe65794df090be0b997.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015383/614130db17be36cbb2238f41b056d1f5/266x266-Q90_614130db17be36cbb2238f41b056d1f5.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015375/4468681eacc938996bdc45eb9ea48cc1/266x266-Q90_4468681eacc938996bdc45eb9ea48cc1.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015380/733765d59e8c7bbfa742ab4ff714bb11/266x266-Q90_733765d59e8c7bbfa742ab4ff714bb11.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/4015387/d19df236c5caa0b470efcb04b1d77928/266x266-Q90_d19df236c5caa0b470efcb04b1d77928.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3979236/7c8c7ceedbbe4cbe4f8f047af1ab8990/266x266-Q90_7c8c7ceedbbe4cbe4f8f047af1ab8990.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3979242/dfdf5ebd2138504affcc133e6657f9c7/266x266-Q90_dfdf5ebd2138504affcc133e6657f9c7.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3979239/1de73f0be2b2a334b1a0ced7d1d7828b/266x266-Q90_1de73f0be2b2a334b1a0ced7d1d7828b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3898887/76cf96f7c4d7364d6cb249e301f6dd99/266x266-Q90_76cf96f7c4d7364d6cb249e301f6dd99.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3898892/f528d97921ccaa93c5b9b995553665ed/266x266-Q90_f528d97921ccaa93c5b9b995553665ed.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916138/04d6002be44c483fca19b3735d395d3b/266x266-Q90_04d6002be44c483fca19b3735d395d3b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916141/c6bb1a54e8e5101db41360727a9a2a9f/266x266-Q90_c6bb1a54e8e5101db41360727a9a2a9f.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916146/422df1549af54ca7e9a71804c9061ef7/266x266-Q90_422df1549af54ca7e9a71804c9061ef7.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3916153/c5fb3e7a287aeb510cf98be2731542f7/266x266-Q90_c5fb3e7a287aeb510cf98be2731542f7.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2053016/57e270e281e349bc4444559b4721c665/266x266-Q90_57e270e281e349bc4444559b4721c665.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3027790/06f835d69eec5557c5fc2d379f368454/266x266-Q90_06f835d69eec5557c5fc2d379f368454.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052937/200fb73c921b68d18b10043d6998029e/266x266-Q90_200fb73c921b68d18b10043d6998029e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3815917/50e3dc4533893d1f50a138b4bc736f27/266x266-Q90_50e3dc4533893d1f50a138b4bc736f27.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052978/76fb0479f1866c62b07fdfe37fe96d8f/266x266-Q90_76fb0479f1866c62b07fdfe37fe96d8f.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2067795/7644acc86d65bbc4711053294991f3c9/266x266-Q90_7644acc86d65bbc4711053294991f3c9.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3803866/12961ebb8d20e24d5b4cf4e712184698/266x266-Q90_12961ebb8d20e24d5b4cf4e712184698.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3803868/2c35c6f0c5f625ff215615215b5e8f3f/266x266-Q90_2c35c6f0c5f625ff215615215b5e8f3f.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3803869/b2de0e46d76a685b81fafb8b76ac768b/266x266-Q90_b2de0e46d76a685b81fafb8b76ac768b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052947/e793489b339baa85c52654e17f34a92b/266x266-Q90_e793489b339baa85c52654e17f34a92b.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2070033/c70731cc550e7c549f1226dffc817947/266x266-Q90_c70731cc550e7c549f1226dffc817947.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3008609/836987724f3a062ca8f4a733f75a5b69/266x266-Q90_836987724f3a062ca8f4a733f75a5b69.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/3061263/804b79eec2b445ede43d2d351be2afbf/266x266-Q90_804b79eec2b445ede43d2d351be2afbf.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2070022/eec70798574358de7482784847f91b79/266x266-Q90_eec70798574358de7482784847f91b79.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069583/fac84c1fdc1a4c4a930f1bc6a9713687/266x266-Q90_fac84c1fdc1a4c4a930f1bc6a9713687.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2068093/ef6f2981d7f29af64287870245888f0e/266x266-Q90_ef6f2981d7f29af64287870245888f0e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2069560/e4560098a08fd59c8d6a58c49983b1ef/266x266-Q90_e4560098a08fd59c8d6a58c49983b1ef.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2998769/cd82434c8c7a2ad0e360fb5eb5bfa406/266x266-Q90_cd82434c8c7a2ad0e360fb5eb5bfa406.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052139/196712cfd056cd01e95fb9ee26a27157/266x266-Q90_196712cfd056cd01e95fb9ee26a27157.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2357990/afbeb911f96d24b2fcb37b32134a898e/266x266-Q90_afbeb911f96d24b2fcb37b32134a898e.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2717871/2c99aefb1c5c9b806829ec70ae048e74/266x266-Q90_2c99aefb1c5c9b806829ec70ae048e74.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2052942/3bf872fafabc67038a5caf309c88d887/266x266-Q90_3bf872fafabc67038a5caf309c88d887.png",
  "https://cdn1.edgedatg.com/aws/v2/dnow/Avatars/theme/2053125/5df3c410697669ec9a989276ed113fea/266x266-Q90_5df3c410697669ec9a989276ed113fea.png",

  // Add more emoji URLs similarly
  ];
  
  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleHoverEnd = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return (
    <div className="homeContainer6">
      <h1 className="textStyle9">PICK YOUR EMOJI</h1>
      <div className="emojiContainer">
        {emojiUrls.map((emojiUrl, index) => (
          <div key={index} className="emojiWrapper">
            <Link to={`/display-emoji/${encodeURIComponent(emojiUrl)}`}>
              <img
                src={emojiUrl}
                alt={`Emoji ${index + 1}`}
                className="emojiStyle"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverEnd}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Adults;
