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
      <div className="company">
        <h2>{company}</h2>
        <img className="logo" src={logo} alt={company + " logo"} />
      </div>
      <div className="right-section">
        <p className="position">{"Position: " + position}</p>
        <div className="role-level-contract">
          <p>{"Role: " + role}</p>
          <p>{"Level: " + level}</p>
          <p>{"Contract: " + contract}</p>
        </div>
        <div className="languages-tools">
          <p>{"Languages: " + languages.join(", ")}</p>
          <p>{"Tools: " + tools.join(", ")}</p>
        </div>
        <p className="location">{"Location: " + location}</p>
        <p className="posted">{"Posted: " + postedAt}</p>
      </div>
    </li>
  );
}
