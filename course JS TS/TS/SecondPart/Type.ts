type Protocol = "https" | "http";

type Config = {
  protocol: Protocol;
  port: 3000 | 3001;
};

type Role = {
  role: string;
};

type ConfigWithRole = Config & Role;

const serverTypeConfig: ConfigWithRole = {
  protocol: "https",
  port: 3000,
  role: "admin",
};

const startTypeConfig = (
  protocol: "https" | "http",
  port: 3000 | 3001
): "Start server" => {
  console.log(`Server started on ${protocol}://server${port}`);

  return "Start server";
};
