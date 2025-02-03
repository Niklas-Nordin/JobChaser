import "./ListItem.css";

export type Jobs = {
  id: number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

export function RenderList({
  company,
  logo,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: Jobs) {
  return (
    <li className="li-item">
      <div className="title-image">
        <h2 className="company-name">{company}</h2>
        <img className="logo" src={logo} alt={company + " logo"} />
      </div>
      <div className="info">
        <h3 className="position">{position}</h3>
        <div className="role-level-contract">
          <p>
            <span>Role: </span> {role}
          </p>
          <p>
            <span>Level: </span>
            {level}
          </p>
          <p>
            <span>Contract: </span>
            {contract}
          </p>
        </div>
        <div className="languages-tools">
          <p>
            <span>Languages: </span>
            {languages.join(", ")}
          </p>
          <p>
            <span>Tools: </span> {tools.join(", ")}
          </p>
        </div>
        <p className="location">
          <span>Location: </span>
          {location}
        </p>
        <p className="posted">
          <span>Posted: </span>
          {postedAt}
        </p>
      </div>
    </li>
  );
}
