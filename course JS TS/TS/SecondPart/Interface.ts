// interface -> object

interface IConfig {
  protocol: "http" | "https";
  port: 3000 | 3001;
}

interface IRole {
  role: string;
}

interface IConfig {
  date: Date;
}

interface IConfigWithRole extends IConfig, IRole {}

const serverInterfaceConfig: IConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
  date: new Date(),
};

const startInterfaceServer = (
  protocol: "https" | "http",
  port: 3000 | 3001
): "Start server" => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return "Start server";
};
