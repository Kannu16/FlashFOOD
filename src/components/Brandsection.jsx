import React, {useState} from "react";

const Brandsection = () => {
  //Brand Image Array
  let brandImageList = [
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160913fbdb50d1257ade855_stop-and-shop.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61f9aa9bafd4220683c28567_VGs_logo7.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091491da266b91553e11d_giant-eagle.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61609161bc65c04d70b91fb5_familyfare.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160914fbdb50d4274adf3a7_tops.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160914b792d8c1e70357323_sn-martins.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61609143a31417a81a957ae4_giant-martins.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160915588d55b4f0856ffcd_giant.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/64a5c41bf724bb41dfb7e64d_Kroger%3DColour%20Logo-p-500.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160917b1a8635a54d0474b5_meijer.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091839ed0e5299124e203_loblaws.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/636588f25303aab26dba6499_savealot%20(2).png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/616091788c2abd72362736a9_superstore.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160915a6317724e22976a7b_hyvee.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61609161bdb50d4592ae0143_provigo.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160916c42acebf7a2165b1a_dominion.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/61e8848d60775e0d6e9055bb_Mt.PlymouthIGA.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160916cdd14348403a7c591_zehrs.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/63bf4c4275cba538a4c79f46_RensPets.png",
    "https://assets-global.website-files.com/5e596dafce8eb6216f68e410/6160917733eb280455acb2cd_nofrills.png"
  ];

    // State to manage the number of images to display
    const [visibleImages, setVisibleImages] = useState(10); // You can adjust the initial number as per your preference

    // Function to handle "See More" button click
    const handleSeeMore = () => {
      setVisibleImages((prevVisibleImages) => prevVisibleImages + brandImageList.length); // You can adjust the number of images to show on each "See More" click
    };

    const handleLess = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages - brandImageList.length); // You can adjust the number of images to show on each "See More" click
      };

  return (
    <>
      <div className="brand-image">
        {brandImageList.slice(0, visibleImages).map((item, index) => (
          <img className="my-3" key={index} alt="Brand-Img" src={item} width="20%" />
        ))}
      </div>
    
      {visibleImages < brandImageList.length ? <button onClick={handleSeeMore}>See More</button> : <button onClick={handleLess}>See Less</button>}
      
      <div className="learn-more-card p-3 card my-5 w-75 m-auto d-flex align-items-center flex-row">
        <p className="mt-0 mb-0">Are you a grocery chain that wants to work with Flashfood?</p>
        <button>Learn More</button>
     </div>
    </>
  );
};

export default Brandsection;
