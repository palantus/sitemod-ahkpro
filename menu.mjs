export default [
  {
    title: "Menu",
    public: true,
    hideWhenSignedIn: true,
    items: [
      {title: "Home", path: "/", public: true},
      {title: "Sign in", path: "/login", public: true}
    ]
  },
  {
    title: "Me",
    items: [
      {title: "Documents", path: "/wiki-docs", permission: "wiki.edit"},
      {title: "Lists", path: "/lists", permission: "lists.read"},
      {title: "Passwords", path: "/passec/buckets", permission: "passec.read"},
      {title: "Personal wiki", path: "/wiki/index-private", permission: "wiki.edit"},
    ]
  },
  {
    title: "Shared",
    items: [
      {title: "Files", path: "/files", permission: "file.read"},
      {title: "Wiki", path: "/", permission: "wiki.read"}
    ]
  },
  {
    title: "System",
    role: "team",
    items: [
      {title: "API keys", path: "/system/apikeys", permission: "admin"},
      {title: "File sources", path: "/filesources", permission: "file.source.manage"},
      {title: "Jobs", path: "/setup/jobs", permission: "admin"},
      {title: "Logs", path: "/logs", permission: "admin"},
      {title: "Mods", path: "/setup/mods", permission: "admin"},
      {title: "Setup", path: "/setup", permission: "admin"},
      {title: "Tools", path: "/systemtools", permission: "admin"},
      {title: "Users", path: "/setup/users", permission: "user.read"}
    ]
  }
]