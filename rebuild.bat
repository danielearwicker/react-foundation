call tsc
copy built\enums.d.ts ..\DefinitelyTyped\types\react-foundation /Y
copy index-header.txt+built\index.d.ts ..\DefinitelyTyped\types\react-foundation\index.d.ts /b
copy built\utils.d.ts ..\DefinitelyTyped\types\react-foundation /Y
copy built\components\*.d.ts ..\DefinitelyTyped\types\react-foundation\components /Y
