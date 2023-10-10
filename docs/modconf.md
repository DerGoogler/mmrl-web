# ModConf

```properties
//cli
MSUCLI          =   /system/bin/magisk --install-module <ZIPFILE>,
KSUCLI          =   <ADB>/ksu/bin/ksud module install <ZIPFILE>,

// default paths
ADB             =   /data/adb,
MODULES         =   <ADB>/modules,
PROPS           =   <MODULES>/<MODID>/module.prop,
SYSTEM          =   <MODULES>/<MODID>/system.prop,
SEPOLICY        =   <MODULES>/<MODID>/sepolicy.rule,
CONFIG          =   <MODULES>/<MODID>/system/usr/share/mmrl/config/<MODID>.mdx,

// service paths
LATESERVICE     =   <MODULES>/<MODID>/service.sh,
POSTSERVICE     =   <MODULES>/<MODID>/post-fs-data.sh,
POSTMOUNT       =   <MODULES>/<MODID>/post-mount.sh,
BOOTCOMP        =   <MODULES>/<MODID>/boot-completed.sh,

// status paths
SKIPMOUNT       =   <MODULES>/<MODID>/skip_mount,
DISABLE         =   <MODULES>/<MODID>/disable,
REMOVE          =   <MODULES>/<MODID>/remove,
UPDATE          =   <MODULES>/<MODID>/update,

// others
MMRLINI         =   <MODULES>/mmrl_install_tools,

```