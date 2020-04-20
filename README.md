# Angular multi-projects setup for Angular and Ionic applications

 Create an Angular workspace which contains as many Angular and Ionic applications as you want that use common `angular.json`, `package.json` and `tsconfig.json` files and `node_modules` folder.

## Benefits of using a single Angular workspace for all related applications

 ✔️ Single repository for all projects.<br/>
 ✔️ Easier way of sharing libraries between related applications.<br/>
 ✔️ Easier to refactor the projects.<br/>
 ✔️ Easier to setup since having a single `node_modules`. No need to install the same packages over and over again.<br/>

## Folder structure
```
📁 node_modules
📂 projects
  - 📂 angular-app1
  - 📂 angular-app2
  - 📂 angular-app3
  - 📂 ionic-app1
  - 📂 ionic-app2
  
  - 📂 libs
    - 📂 library1
    - 📂 library2
📂 www
📂 resources
📂 platforms
📄 angular.json
📄 config.xml
📄 ionic.config.json
📄 package.json
📄 tsconfig.json
📄 tslint.json
```
    
## Steps for achieving this result
First of all we need to create an empty Angular workspace.<br/>
It is very important to include the option **--createApplication=false** to avoid creating an application from the beginning inside the workspace folder.

**STEP 1:**
Let's create the Angular workspace
```
ng new angular-multi-projects --createApplication=false
```

**STEP 2:**
Let's create the first Angular Application

```
ng generate application angular-app1
```

**NOTE:** You can create the other Angular Applications using the same command provided above. All of the applications will be created under `projects folder` and they will also be added to the `angular.json` file, which you can find in the root folder.

**STEP 3:**
Create the Ionic Apps<br/>
#### **WRONG WAY**<br/>
For creating the Ionic apps we **WON'T** use the `ionic start ionic-app1` command. This command will create a new project with all the default files a new angular project has (`angular.json`, `package.json`, etc.) in the workspace folder (the root folder we created in **STEP 1**).<br/>
Also, if you want to keep the structure presented above, it **IS NOT A GOOD IDEA** to change the current working directory to projects folder (`cd projects`) and create there the Ionic Applications using (`ionic start ionic-app1`). This will create the Ionic Applications as I mentioned above, but in this case they will get created under the projects folder.

#### **CORRECT WAY**<br/>
If we want to make the Ionic Apps live in harmony next to simple Angular Apps we need to `manually install` Ionic on a basic Angular App.<br/>
This being said, the Ionic Apps will be created using the same command we used for creating basic Angular Applications.

```
ng generate application ionic-app1
```

Now we have two options:<br/>
  - Option 1:
  Use commands for adding Ionic to an Angular application.
  ```
  ng add @ionic/angular
  ```
  Be careful, this method might not work as you expect from the beginning.<br/><br/>
  ✔️ It will automatically create the `theme folder` with `variables.scss` inside de `src folder` of your app.<br/><br/>
  **Now it depends in what order you have created everything**
  Even though `ng add` should add to the `defaultProject` inside `angular.json`, I've realised that this won't actually be the case. So it is better if you check the following cases:<br/>
  1. If there is only one angular application created at this step, everything was created correctly.
  2. If there were multiple angular applications already created before running `ng add @ionic/angular`, this command might attach the ionic styles, ionicons and/or build tasks to another angular applications. If this is the case, you have to manually move everything to the correct application inside `angular.json` following the example mentioned below.<br/>
  - Option 2:
  Manually install Ionic to an Angular Application<br/>
  
  First of all you have to install or check if you already have installed the following packages:
  ```
  npm install @ionic/angular
  ```
  ```
  npm install @ionic/angular-toolkit
  ```
  You have to use the links from Ionic, provided below in the **References** section and copy the highlighted code from each link to `angular.json` for the application you want to transform into an Ionic App. Add styling under `styles`, ionicons under `assets` and build tasks right after `e2e` in `angular.json`. Make sure to replace the `${projectName}` with the actual project name of the angular application for the build tasks.

**STEP 4:**
Create the `ionic.config.json` in the root folder using the commad:
```
ionic init
```
When you are prompted to provide the project name, just insert the name of the angular application you have started to transform in an Ionic Application.

**FINAL STEP**
After you complete all the other steps, if you use `ionic serve` everything should work as expected, but make sure to provide the project you are trying serve, otherwise it won't work.<br/>
Correct usage:
```
ionic serve --project ionic-app1
```
You can also run the Ionic App on the device. Let's say you are trying to run the app on an Android Device, you should do it like this:
```
ionic cordova platform add android
ionic cordova run android --project ionic-app1
```
Always make sure to mention the project you are trying to run using Ionic, because you are in a multi-project setup, it won't know which project to run.

## Possible Error
Even if `ionic serve` will work as expected when you are trying to view the project in the browser, you should know that when you are trying to build and run the project for android using cordova, you might get an error when the application starts (even if the application builds without error).<br/>
The error will look something like `CONNECTION ERROR` and something related to `file:///android_asset/www/index.html`, well don't worry. This is because we created the Ionic App as an Angular Application in the first place. In `angular.json` in the project we are transforming in an Ionic App check what is inside `architect -> build -> builder -> options -> outputPath`

If you see the value of `"outputPath": "dist/ionic-app1"` then this is the problem. You should change the value of `outputPath` to `www` like this `"outputPath": "www"`.

## References
https://stackoverflow.com/a/55496931/5930816

**Ionic Links:**<br/>
*Styling:* https://github.com/ionic-team/ionic/blob/master/angular/src/schematics/add/index.ts#L40-L58<br/>
*Ionicons:* https://github.com/ionic-team/ionic/blob/master/angular/src/schematics/add/index.ts#L60-L70<br/>
*Buid Tasks:* https://github.com/ionic-team/ionic/blob/master/angular/src/schematics/add/index.ts#L72-L100<br/>

## License
Licensed under MIT license - You are free to extend use and share this example as you like.
