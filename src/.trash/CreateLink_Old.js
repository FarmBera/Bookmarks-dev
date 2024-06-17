const dir = "./icon/";
const img_ext = ".png";

function CreateLink_Old({ name: s_name, size = 100 }) {
  // 데이터가 없다면
  if (!s_name)
    return (
      <div>
        <p>NO DATA</p>
      </div>
    );

  // let location = `${dir}${s_name}${img_ext}`;
  let location = `./icon/${s_name}.png`;

  return (
    <div className="container">
      <img src={location} width={size} height={size} alt={s_name} />
      <img src="../icon/Google.png" width={size} height={size} alt={s_name} />
      {/* <p>{s_name}</p> */}
      <p>{location}</p>
    </div>
  );
}

export default CreateLink_Old;
