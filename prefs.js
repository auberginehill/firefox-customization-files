/*      prefs.js
 *
 *
 *      (1) Recommended configuration
 *
 *      Firefox is configured by using two configuration files (a system-wide installation):
 *
 *      OS                  Original name   Path and file name
 *
 *      Windows:
 *
 *      Windows 7           prefs.js        %programfiles(x86)%\Mozilla Firefox\defaults\pref\prefs.js
 *      Windows 7           firefox.cfg     %programfiles(x86)%\Mozilla Firefox\firefox.cfg
 *
 *      Windows 7           prefs.js        C:\Program Files (x86)\Mozilla Firefox\defaults\pref\prefs.js
 *      Windows 7           firefox.cfg     C:\Program Files (x86)\Mozilla Firefox\firefox.cfg
 *
 *      Linux:
 *
 *      Linux               prefs.js        Either this file is not required or is copied to ~/.mozilla/firefox/*.default/prefs.js
 *      Linux               firefox.cfg     /etc/firefox/firefox.js
 *      Linux (Debian)	    firefox.cfg     /etc/firefox-esr/firefox-esr.js
 *      Linux (CentOS 6.3)  firefox.cfg     /usr/l/usr/lib64/firefox/defaults/preferencesib64/firefox/defaults/preferences/your_site.js
 *
 *      OS X:
 *
 *      OS X                prefs.js        /Applications/Firefox.app/Contents/Resources/defaults/pref/prefs.js
 *      OS X                firefox.cfg     /Applications/Firefox.app/Contents/Resources/firefox.cfg
 *
 *      Build a lock file with computer wide settings (prefs.js) containing only two rows of actual data (in addition to the comments) in accordance with the settings later in this section and a configuration file (firefox.cfg) containing all the actual configuration settings.
 *      These files should contain the settings which the organisation wishes to configure and enforce.
 *      Deploy it to the EUDs in %programfiles(x86)%\Mozilla Firefox\firefox.cfg and
 *      %programfiles(x86)%\Mozilla Firefox\defaults\pref\prefs.js.
 *
 *      prefs.js (lock file) content:
 *
 *      pref('general.config.filename', 'firefox.cfg');
 *      pref('general.config.obscure_value', 0);
 *
 *
 *
 *
 *      (2) Optional configuration (concerning a single Firefox user profile):
 *
 *      Alternatively, if a computer-wide installation is not preferred, Firefox can be configured with a single configuration file, where the installation will concern only a single Firefox user profile.
 *
 *      N.B.:   Please read https://developer.mozilla.org/fi/docs/Mozilla/Preferences/A_brief_guide_to_Mozilla_preferences   
 *      N.B.:   In this option before doing any modifications that concern an existing Firefox user profile (for instance in Windows %APPDATA%\Roaming\Mozilla\Firefox\Profiles\[a_profile_name]\), it is highly recommended to backup the whole existing Firefox user profile directory before anything is copied to or otherwise altered inside the Firefox user profile directory, since these settings may alter the browser behaviour quite a bit.
 *      N.B.:   In this option it is highly recommended to create a completely new user profile to use with the custom configuration settings.
 *      N.B.:   In this option it is mandatory to follow option 3 below.
 *
 *      File (user.js) location
 *
 *      OS                          Original name   Path and file name
 *
 *      Windows 7                   firefox.cfg     %APPDATA%\Roaming\Mozilla\Firefox\Profiles\[a_profile_name]\user.js
 *      Linux                       firefox.cfg     ~/.mozilla/firefox/[a_profile_name]/user.js
 *      OS X                        firefox.cfg     ~/Library/Application Support/Firefox/Profiles/[a_profile_name]/user.js
 *      Android                     firefox.cfg     /data/data/org.mozilla.firefox/files/mozilla/[a_profile_name]/
 *      Sailfish OS + Alien Dalvik  firefox.cfg     /opt/alien/data/data/org.mozilla.firefox/files/mozilla/[a_profile_name]
 *      Windows (portable)          firefox.cfg     [firefox directory]\Data\profile\
 *
 *      Build a configuration file (user.js) containing all configuration settings in accordance with the settings later in this section.
 *
 *
 *
 *
 *      (3) Tweaking the settings: Setting the settings settable rather than in a locked state
 *
 *      In the firefox.cfg file, if the settings are preferred to be still controllable (not locked) on the about:config -page, please change every
 *
 *      lockPref("
 *
 *      to
 *
 *      pref("
 *
 *      Please notice that lockPref() may be called only in the configuration file (firefox.cfg), while user.js can only contain pref(), user_pref() and sticky_pref() calls.
 *
 *
 *
 *
 *      (4) Additional notes 
 *
 *      For disabling the Pocket integration, please start by removing the "pocket" icon from the toolbar.
 *
 *
 *
 *
 *      Homepage: https://github.com/auberginehill/firefox-customization-files/
 *      Short URL: http://tinyurl.com/hc7uvh9
 *      Source: http://kb.mozillazine.org/Locking_preferences
 *      Source: http://kb.mozillazine.org/About:config_entries
 *      Source: http://kb.mozillazine.org/User.js_file
 *      Source: https://gist.github.com/haasn/69e19fc2fe0e25f3cff5
 *      Source: https://gist.github.com/MrYar/751e0e5f3f1430db7ec5a8c8aa237b72
 *      Source: https://github.com/amq/firefox-debloat
 *      Source: http://practical-admin.com/blog/firefox-customization-file/
 *      Source: http://www.ghacks.net/2015/08/18/a-comprehensive-list-of-firefox-privacy-and-security-settings/
 *      Source: http://www.ghacks.net/2015/11/09/how-to-disable-the-firefox-saved-telemetry-pings-and-archive-folder/
 *      Source: https://www.gov.uk/government/publications/browser-security-guidance-mozilla-firefox/browser-security-guidance-mozilla-firefox */


pref('general.config.filename', 'firefox.cfg');
pref('general.config.obscure_value', 0);
