# ModConf

Default values of ModConf

## Command line interfaces

| Key             | Default                                                        |
|-----------------|----------------------------------------------------------------|
| `MSUCLI`        | `/system/bin/magisk --install-module <ZIPFILE>`                |
| `KSUCLI`        | `<ADB>/ksu/bin/ksud module install <ZIPFILE>`                  |

## Default paths

| Key             | Default                                                        |
|-----------------|----------------------------------------------------------------|
| `ADB`           | `/data/adb`                                                    |
| `MODULES`       | `<ADB>/modules`                                                |
| `PROPS`         | `<MODULES>/<MODID>/module.prop`                                |
| `SYSTEM`        | `<MODULES>/<MODID>/system.prop`                                |
| `SEPOLICY`      | `<MODULES>/<MODID>/sepolicy.rule`                              |
| `CONFIG`        | `<MODULES>/<MODID>/system/usr/share/mmrl/config/<MODID>.mdx`   |

## Service paths

| Key             | Default                                                        |
|-----------------|----------------------------------------------------------------|
| `LATESERVICE`   | `<MODULES>/<MODID>/service.sh`                                 |
| `POSTSERVICE`   | `<MODULES>/<MODID>/post-fs-data.sh`                            |
| `POSTMOUNT`     | `<MODULES>/<MODID>/post-mount.sh`                              |
| `BOOTCOMP`      | `<MODULES>/<MODID>/boot-completed.sh`                          |

## Status paths

| Key             | Default                                                        |
|-----------------|----------------------------------------------------------------|
| `SKIPMOUNT`     | `<MODULES>/<MODID>/skip_mount`                                 |
| `DISABLE`       | `<MODULES>/<MODID>/disable`                                    |
| `REMOVE`        | `<MODULES>/<MODID>/remove`                                     |
| `UPDATE`        | `<MODULES>/<MODID>/update`                                     |

## Other path

| Key             | Default                                                        |
|-----------------|----------------------------------------------------------------|
| `MMRLINI`       | `<MODULES>/mmrl_install_tools`                                 |
