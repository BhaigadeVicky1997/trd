import * as i0 from '@angular/core';
import { Injectable, Directive, Component, ChangeDetectionStrategy, Input, forwardRef, Inject, ContentChild, ViewChild, HostBinding, HostListener, Optional, Host, Self, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { trigger, transition, query, stagger, animate, style } from '@angular/animations';
import { BehaviorSubject, Subject } from 'rxjs';

// -owner-group-others-
// -rwxrwxrwx = 0777
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 4] = "Read";
    FileAccess[FileAccess["Write"] = 2] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["Execute"] = 1] = "Execute";
    FileAccess[FileAccess["ReadWriteExecute"] = 7] = "ReadWriteExecute";
    FileAccess[FileAccess["ExecuteRead"] = 5] = "ExecuteRead";
    FileAccess[FileAccess["r"] = 4] = "r";
    FileAccess[FileAccess["w"] = 2] = "w";
    FileAccess[FileAccess["x"] = 1] = "x";
    FileAccess[FileAccess["rw"] = 6] = "rw";
    FileAccess[FileAccess["rwx"] = 7] = "rwx";
    FileAccess[FileAccess["xr"] = 5] = "xr";
})(FileAccess || (FileAccess = {}));
/**
 * This table lists some important MIME types for the Web copied from
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
 * http://www.iana.org/assignments/media-types/media-types.xhtml
 */
var FileUploadTypes;
(function (FileUploadTypes) {
    FileUploadTypes["arc"] = "application/octet-stream";
    FileUploadTypes["midi"] = "audio/midi";
    FileUploadTypes["ts"] = "application/typescript";
    FileUploadTypes["woff2"] = "font/woff2";
    FileUploadTypes["evy"] = "application/envoy";
    FileUploadTypes["fif"] = "application/fractals";
    FileUploadTypes["hta"] = "application/hta";
    FileUploadTypes["acx"] = "application/internet-property-stream";
    FileUploadTypes["dot"] = "application/msword";
    FileUploadTypes["dms"] = "application/octet-stream";
    FileUploadTypes["eps"] = "application/postscript";
    FileUploadTypes["ps"] = "application/postscript";
    FileUploadTypes["xla"] = "application/vnd.ms-excel";
    FileUploadTypes["xlc"] = "application/vnd.ms-excel";
    FileUploadTypes["xlm"] = "application/vnd.ms-excel";
    FileUploadTypes["xlt"] = "application/vnd.ms-excel";
    FileUploadTypes["xlw"] = "application/vnd.ms-excel";
    FileUploadTypes["msg"] = "application/vnd.ms-outlook";
    FileUploadTypes["sst"] = "application/vnd.ms-pkicertstore";
    FileUploadTypes["pot"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["pps"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["wcm"] = "application/vnd.ms-works";
    FileUploadTypes["wdb"] = "application/vnd.ms-works";
    FileUploadTypes["wks"] = "application/vnd.ms-works";
    FileUploadTypes["cdf"] = "application/x-cdf";
    FileUploadTypes["tgz"] = "application/x-compressed";
    FileUploadTypes["dcr"] = "application/x-director";
    FileUploadTypes["dxr"] = "application/x-director";
    FileUploadTypes["gz"] = "application/x-gzip";
    FileUploadTypes["ins"] = "application/x-internet-signup";
    FileUploadTypes["isp"] = "application/x-internet-signup";
    FileUploadTypes["iii"] = "application/x-iphone";
    FileUploadTypes["dll"] = "application/x-msdownload";
    FileUploadTypes["m13"] = "application/x-msmediaview";
    FileUploadTypes["m14"] = "application/x-msmediaview";
    FileUploadTypes["pma"] = "application/x-perfmon";
    FileUploadTypes["pmc"] = "application/x-perfmon";
    FileUploadTypes["pmr"] = "application/x-perfmon";
    FileUploadTypes["pmw"] = "application/x-perfmon";
    FileUploadTypes["pfx"] = "application/x-pkcs12";
    FileUploadTypes["spc"] = "application/x-pkcs7-certificates";
    FileUploadTypes["p7c"] = "application/x-pkcs7-mime";
    FileUploadTypes["texi"] = "application/x-texinfo";
    FileUploadTypes["roff"] = "application/x-troff";
    FileUploadTypes["tr"] = "application/x-troff";
    FileUploadTypes["man"] = "application/x-troff-man";
    FileUploadTypes["me"] = "application/x-troff-me";
    FileUploadTypes["ms"] = "application/x-troff-ms";
    FileUploadTypes["crt"] = "application/x-x509-ca-cert";
    FileUploadTypes["pko"] = "application/ynd.ms-pkipko";
    FileUploadTypes["snd"] = "audio/basic";
    FileUploadTypes["rmi"] = "audio/mid";
    FileUploadTypes["mp3"] = "audio/mpeg";
    FileUploadTypes["aifc"] = "audio/x-aiff";
    FileUploadTypes["aiff"] = "audio/x-aiff";
    FileUploadTypes["ra"] = "audio/x-pn-realaudio";
    FileUploadTypes["jpe"] = "image/jpeg";
    FileUploadTypes["jpeg"] = "image/jpeg";
    FileUploadTypes["jfif"] = "image/pipeg";
    FileUploadTypes["tif"] = "image/tiff";
    FileUploadTypes["mht"] = "message/rfc822";
    FileUploadTypes["mhtml"] = "message/rfc822";
    FileUploadTypes["nws"] = "message/rfc822";
    FileUploadTypes["htm"] = "text/html";
    FileUploadTypes["stm"] = "text/html";
    FileUploadTypes["uls"] = "text/iuls";
    FileUploadTypes["sct"] = "text/scriptlet";
    FileUploadTypes["htt"] = "text/webviewhtml";
    FileUploadTypes["htc"] = "text/x-component";
    FileUploadTypes["mp2"] = "video/mpeg";
    FileUploadTypes["mpa"] = "video/mpeg";
    FileUploadTypes["mpe"] = "video/mpeg";
    FileUploadTypes["mpg"] = "video/mpeg";
    FileUploadTypes["mpv2"] = "video/mpeg";
    FileUploadTypes["mov"] = "video/quicktime";
    FileUploadTypes["lsf"] = "video/x-la-asf";
    FileUploadTypes["lsx"] = "video/x-la-asf";
    FileUploadTypes["asr"] = "video/x-ms-asf";
    FileUploadTypes["asx"] = "video/x-ms-asf";
    FileUploadTypes["flr"] = "x-world/x-vrml";
    FileUploadTypes["vrml"] = "x-world/x-vrml";
    FileUploadTypes["wrz"] = "x-world/x-vrml";
    FileUploadTypes["xaf"] = "x-world/x-vrml";
    FileUploadTypes["xof"] = "x-world/x-vrml";
    FileUploadTypes["x3d"] = "application/vnd.hzn-3d-crossword";
    FileUploadTypes["3gp"] = "video/3gpp";
    FileUploadTypes["3g2"] = "video/3gpp2";
    FileUploadTypes["mseq"] = "application/vnd.mseq";
    FileUploadTypes["pwn"] = "application/vnd.3m.post-it-notes";
    FileUploadTypes["plb"] = "application/vnd.3gpp.pic-bw-large";
    FileUploadTypes["psb"] = "application/vnd.3gpp.pic-bw-small";
    FileUploadTypes["pvb"] = "application/vnd.3gpp.pic-bw-var";
    FileUploadTypes["tcap"] = "application/vnd.3gpp2.tcap";
    FileUploadTypes["7z"] = "application/x-7z-compressed";
    FileUploadTypes["abw"] = "application/x-abiword";
    FileUploadTypes["ace"] = "application/x-ace-compressed";
    FileUploadTypes["acc"] = "application/vnd.americandynamics.acc";
    FileUploadTypes["acu"] = "application/vnd.acucobol";
    FileUploadTypes["atc"] = "application/vnd.acucorp";
    FileUploadTypes["adp"] = "audio/adpcm";
    FileUploadTypes["aab"] = "application/x-authorware-bin";
    FileUploadTypes["aam"] = "application/x-authorware-map";
    FileUploadTypes["aas"] = "application/x-authorware-seg";
    FileUploadTypes["air"] = "application/vnd.adobe.air-application-installer-package+zip";
    FileUploadTypes["swf"] = "application/x-shockwave-flash";
    FileUploadTypes["fxp"] = "application/vnd.adobe.fxp";
    FileUploadTypes["pdf"] = "application/pdf";
    FileUploadTypes["ppd"] = "application/vnd.cups-ppd";
    FileUploadTypes["dir"] = "application/x-director";
    FileUploadTypes["xdp"] = "application/vnd.adobe.xdp+xml";
    FileUploadTypes["xfdf"] = "application/vnd.adobe.xfdf";
    FileUploadTypes["aac"] = "audio/x-aac";
    FileUploadTypes["ahead"] = "application/vnd.ahead.space";
    FileUploadTypes["azf"] = "application/vnd.airzip.filesecure.azf";
    FileUploadTypes["azs"] = "application/vnd.airzip.filesecure.azs";
    FileUploadTypes["azw"] = "application/vnd.amazon.ebook";
    FileUploadTypes["ami"] = "application/vnd.amiga.ami";
    FileUploadTypes["apk"] = "application/vnd.android.package-archive";
    FileUploadTypes["cii"] = "application/vnd.anser-web-certificate-issue-initiation";
    FileUploadTypes["fti"] = "application/vnd.anser-web-funds-transfer-initiation";
    FileUploadTypes["atx"] = "application/vnd.antix.game-component";
    FileUploadTypes["dmg"] = "application/x-apple-diskimage";
    FileUploadTypes["mpkg"] = "application/vnd.apple.installer+xml";
    FileUploadTypes["aw"] = "application/applixware";
    FileUploadTypes["les"] = "application/vnd.hhe.lesson-player";
    FileUploadTypes["swi"] = "application/vnd.aristanetworks.swi";
    FileUploadTypes["s"] = "text/x-asm";
    FileUploadTypes["atomcat"] = "application/atomcat+xml";
    FileUploadTypes["atomsvc"] = "application/atomsvc+xml";
    FileUploadTypes["atom"] = "application/atom+xml";
    FileUploadTypes["ac"] = "application/pkix-attr-cert";
    FileUploadTypes["aif"] = "audio/x-aiff";
    FileUploadTypes["avi"] = "video/x-msvideo";
    FileUploadTypes["aep"] = "application/vnd.audiograph";
    FileUploadTypes["dxf"] = "image/vnd.dxf";
    FileUploadTypes["dwf"] = "model/vnd.dwf";
    FileUploadTypes["par"] = "text/plain-bas";
    FileUploadTypes["bcpio"] = "application/x-bcpio";
    FileUploadTypes["bin"] = "application/octet-stream";
    FileUploadTypes["bmp"] = "image/bmp";
    FileUploadTypes["torrent"] = "application/x-bittorrent";
    FileUploadTypes["cod"] = "application/vnd.rim.cod";
    FileUploadTypes["mpm"] = "application/vnd.blueice.multipass";
    FileUploadTypes["bmi"] = "application/vnd.bmi";
    FileUploadTypes["sh"] = "application/x-sh";
    FileUploadTypes["btif"] = "image/prs.btif";
    FileUploadTypes["rep"] = "application/vnd.businessobjects";
    FileUploadTypes["bz"] = "application/x-bzip";
    FileUploadTypes["bz2"] = "application/x-bzip2";
    FileUploadTypes["csh"] = "application/x-csh";
    FileUploadTypes["c"] = "text/x-c";
    FileUploadTypes["cdxml"] = "application/vnd.chemdraw+xml";
    FileUploadTypes["css"] = "text/css";
    FileUploadTypes["cdx"] = "chemical/x-cdx";
    FileUploadTypes["cml"] = "chemical/x-cml";
    FileUploadTypes["csml"] = "chemical/x-csml";
    FileUploadTypes["cdbcmsg"] = "application/vnd.contact.cmsg";
    FileUploadTypes["cla"] = "application/vnd.claymore";
    FileUploadTypes["c4g"] = "application/vnd.clonk.c4group";
    FileUploadTypes["sub"] = "image/vnd.dvb.subtitle";
    FileUploadTypes["cdmia"] = "application/cdmi-capability";
    FileUploadTypes["cdmic"] = "application/cdmi-container";
    FileUploadTypes["cdmid"] = "application/cdmi-domain";
    FileUploadTypes["cdmio"] = "application/cdmi-object";
    FileUploadTypes["cdmiq"] = "application/cdmi-queue";
    FileUploadTypes["c11amc"] = "application/vnd.cluetrust.cartomobile-config";
    FileUploadTypes["c11amz"] = "application/vnd.cluetrust.cartomobile-config-pkg";
    FileUploadTypes["ras"] = "image/x-cmu-raster";
    FileUploadTypes["dae"] = "model/vnd.collada+xml";
    FileUploadTypes["csv"] = "text/csv";
    FileUploadTypes["cpt"] = "application/mac-compactpro";
    FileUploadTypes["wmlc"] = "application/vnd.wap.wmlc";
    FileUploadTypes["cgm"] = "image/cgm";
    FileUploadTypes["ice"] = "x-conference/x-cooltalk";
    FileUploadTypes["cmx"] = "image/x-cmx";
    FileUploadTypes["xar"] = "application/vnd.xara";
    FileUploadTypes["cmc"] = "application/vnd.cosmocaller";
    FileUploadTypes["cpio"] = "application/x-cpio";
    FileUploadTypes["clkx"] = "application/vnd.crick.clicker";
    FileUploadTypes["clkk"] = "application/vnd.crick.clicker.keyboard";
    FileUploadTypes["clkp"] = "application/vnd.crick.clicker.palette";
    FileUploadTypes["clkt"] = "application/vnd.crick.clicker.template";
    FileUploadTypes["clkw"] = "application/vnd.crick.clicker.wordbank";
    FileUploadTypes["wbs"] = "application/vnd.criticaltools.wbs+xml";
    FileUploadTypes["cryptonote"] = "application/vnd.rig.cryptonote";
    FileUploadTypes["cif"] = "chemical/x-cif";
    FileUploadTypes["cmdf"] = "chemical/x-cmdf";
    FileUploadTypes["cu"] = "application/cu-seeme";
    FileUploadTypes["cww"] = "application/prs.cww";
    FileUploadTypes["curl"] = "text/vnd.curl";
    FileUploadTypes["dcurl"] = "text/vnd.curl.dcurl";
    FileUploadTypes["mcurl"] = "text/vnd.curl.mcurl";
    FileUploadTypes["scurl"] = "text/vnd.curl.scurl";
    FileUploadTypes["car"] = "application/vnd.curl.car";
    FileUploadTypes["pcurl"] = "application/vnd.curl.pcurl";
    FileUploadTypes["cmp"] = "application/vnd.yellowriver-custom-menu";
    FileUploadTypes["dssc"] = "application/dssc+der";
    FileUploadTypes["xdssc"] = "application/dssc+xml";
    FileUploadTypes["deb"] = "application/x-debian-package";
    FileUploadTypes["uva"] = "audio/vnd.dece.audio";
    FileUploadTypes["uvi"] = "image/vnd.dece.graphic";
    FileUploadTypes["uvh"] = "video/vnd.dece.hd";
    FileUploadTypes["uvm"] = "video/vnd.dece.mobile";
    FileUploadTypes["uvu"] = "video/vnd.uvvu.mp4";
    FileUploadTypes["uvp"] = "video/vnd.dece.pd";
    FileUploadTypes["uvs"] = "video/vnd.dece.sd";
    FileUploadTypes["uvv"] = "video/vnd.dece.video";
    FileUploadTypes["dvi"] = "application/x-dvi";
    FileUploadTypes["seed"] = "application/vnd.fdsn.seed";
    FileUploadTypes["dtb"] = "application/x-dtbook+xml";
    FileUploadTypes["res"] = "application/x-dtbresource+xml";
    FileUploadTypes["ait"] = "application/vnd.dvb.ait";
    FileUploadTypes["svc"] = "application/vnd.dvb.service";
    FileUploadTypes["eol"] = "audio/vnd.digital-winds";
    FileUploadTypes["djvu"] = "image/vnd.djvu";
    FileUploadTypes["dtd"] = "application/xml-dtd";
    FileUploadTypes["mlp"] = "application/vnd.dolby.mlp";
    FileUploadTypes["wad"] = "application/x-doom";
    FileUploadTypes["dpg"] = "application/vnd.dpgraph";
    FileUploadTypes["dra"] = "audio/vnd.dra";
    FileUploadTypes["dfac"] = "application/vnd.dreamfactory";
    FileUploadTypes["dts"] = "audio/vnd.dts";
    FileUploadTypes["dtshd"] = "audio/vnd.dts.hd";
    FileUploadTypes["dwg"] = "image/vnd.dwg";
    FileUploadTypes["geo"] = "application/vnd.dynageo";
    FileUploadTypes["es"] = "application/ecmascript";
    FileUploadTypes["mag"] = "application/vnd.ecowin.chart";
    FileUploadTypes["mmr"] = "image/vnd.fujixerox.edmics-mmr";
    FileUploadTypes["rlc"] = "image/vnd.fujixerox.edmics-rlc";
    FileUploadTypes["exi"] = "application/exi";
    FileUploadTypes["mgz"] = "application/vnd.proteus.magazine";
    FileUploadTypes["epub"] = "application/epub+zip";
    FileUploadTypes["eml"] = "message/rfc822";
    FileUploadTypes["nml"] = "application/vnd.enliven";
    FileUploadTypes["xpr"] = "application/vnd.is-xpr";
    FileUploadTypes["xif"] = "image/vnd.xiff";
    FileUploadTypes["xfdl"] = "application/vnd.xfdl";
    FileUploadTypes["emma"] = "application/emma+xml";
    FileUploadTypes["ez2"] = "application/vnd.ezpix-album";
    FileUploadTypes["ez3"] = "application/vnd.ezpix-package";
    FileUploadTypes["fst"] = "image/vnd.fst";
    FileUploadTypes["fvt"] = "video/vnd.fvt";
    FileUploadTypes["fbs"] = "image/vnd.fastbidsheet";
    FileUploadTypes["fe_launch"] = "application/vnd.denovo.fcselayout-link";
    FileUploadTypes["f4v"] = "video/x-f4v";
    FileUploadTypes["flv"] = "video/x-flv";
    FileUploadTypes["fpx"] = "image/vnd.fpx";
    FileUploadTypes["npx"] = "image/vnd.net-fpx";
    FileUploadTypes["flx"] = "text/vnd.fmi.flexstor";
    FileUploadTypes["fli"] = "video/x-fli";
    FileUploadTypes["ftc"] = "application/vnd.fluxtime.clip";
    FileUploadTypes["fdf"] = "application/vnd.fdf";
    FileUploadTypes["f"] = "text/x-fortran";
    FileUploadTypes["mif"] = "application/vnd.mif";
    FileUploadTypes["fm"] = "application/vnd.framemaker";
    FileUploadTypes["fh"] = "image/x-freehand";
    FileUploadTypes["fsc"] = "application/vnd.fsc.weblaunch";
    FileUploadTypes["fnc"] = "application/vnd.frogans.fnc";
    FileUploadTypes["ltf"] = "application/vnd.frogans.ltf";
    FileUploadTypes["ddd"] = "application/vnd.fujixerox.ddd";
    FileUploadTypes["xdw"] = "application/vnd.fujixerox.docuworks";
    FileUploadTypes["xbd"] = "application/vnd.fujixerox.docuworks.binder";
    FileUploadTypes["oas"] = "application/vnd.fujitsu.oasys";
    FileUploadTypes["oa2"] = "application/vnd.fujitsu.oasys2";
    FileUploadTypes["oa3"] = "application/vnd.fujitsu.oasys3";
    FileUploadTypes["fg5"] = "application/vnd.fujitsu.oasysgp";
    FileUploadTypes["bh2"] = "application/vnd.fujitsu.oasysprs";
    FileUploadTypes["spl"] = "application/x-futuresplash";
    FileUploadTypes["fzs"] = "application/vnd.fuzzysheet";
    FileUploadTypes["g3"] = "image/g3fax";
    FileUploadTypes["gmx"] = "application/vnd.gmx";
    FileUploadTypes["gtw"] = "model/vnd.gtw";
    FileUploadTypes["txd"] = "application/vnd.genomatix.tuxedo";
    FileUploadTypes["ggb"] = "application/vnd.geogebra.file";
    FileUploadTypes["ggt"] = "application/vnd.geogebra.tool";
    FileUploadTypes["gdl"] = "model/vnd.gdl";
    FileUploadTypes["gex"] = "application/vnd.geometry-explorer";
    FileUploadTypes["gxt"] = "application/vnd.geonext";
    FileUploadTypes["g2w"] = "application/vnd.geoplan";
    FileUploadTypes["g3w"] = "application/vnd.geospace";
    FileUploadTypes["gsf"] = "application/x-font-ghostscript";
    FileUploadTypes["bdf"] = "application/x-font-bdf";
    FileUploadTypes["gtar"] = "application/x-gtar";
    FileUploadTypes["texinfo"] = "application/x-texinfo";
    FileUploadTypes["gnumeric"] = "application/x-gnumeric";
    FileUploadTypes["kml"] = "application/vnd.google-earth.kml+xml";
    FileUploadTypes["kmz"] = "application/vnd.google-earth.kmz";
    FileUploadTypes["gqf"] = "application/vnd.grafeq";
    FileUploadTypes["gif"] = "image/gif";
    FileUploadTypes["gv"] = "text/vnd.graphviz";
    FileUploadTypes["gac"] = "application/vnd.groove-account";
    FileUploadTypes["ghf"] = "application/vnd.groove-help";
    FileUploadTypes["gim"] = "application/vnd.groove-identity-message";
    FileUploadTypes["grv"] = "application/vnd.groove-injector";
    FileUploadTypes["gtm"] = "application/vnd.groove-tool-message";
    FileUploadTypes["tpl"] = "application/vnd.groove-tool-template";
    FileUploadTypes["vcg"] = "application/vnd.groove-vcard";
    FileUploadTypes["h261"] = "video/h261";
    FileUploadTypes["h263"] = "video/h263";
    FileUploadTypes["h264"] = "video/h264";
    FileUploadTypes["hpid"] = "application/vnd.hp-hpid";
    FileUploadTypes["hps"] = "application/vnd.hp-hps";
    FileUploadTypes["hdf"] = "application/x-hdf";
    FileUploadTypes["rip"] = "audio/vnd.rip";
    FileUploadTypes["hbci"] = "application/vnd.hbci";
    FileUploadTypes["jlt"] = "application/vnd.hp-jlyt";
    FileUploadTypes["pcl"] = "application/vnd.hp-pcl";
    FileUploadTypes["hpgl"] = "application/vnd.hp-hpgl";
    FileUploadTypes["hvs"] = "application/vnd.yamaha.hv-script";
    FileUploadTypes["hvd"] = "application/vnd.yamaha.hv-dic";
    FileUploadTypes["hvp"] = "application/vnd.yamaha.hv-voice";
    FileUploadTypes["sfd-hdstx"] = "application/vnd.hydrostatix.sof-data";
    FileUploadTypes["stk"] = "application/hyperstudio";
    FileUploadTypes["hal"] = "application/vnd.hal+xml";
    FileUploadTypes["html"] = "text/html";
    FileUploadTypes["irm"] = "application/vnd.ibm.rights-management";
    FileUploadTypes["sc"] = "application/vnd.ibm.secure-container";
    FileUploadTypes["ics"] = "text/calendar";
    FileUploadTypes["icc"] = "application/vnd.iccprofile";
    FileUploadTypes["ico"] = "image/x-icon";
    FileUploadTypes["igl"] = "application/vnd.igloader";
    FileUploadTypes["ief"] = "image/ief";
    FileUploadTypes["ivp"] = "application/vnd.immervision-ivp";
    FileUploadTypes["ivu"] = "application/vnd.immervision-ivu";
    FileUploadTypes["rif"] = "application/reginfo+xml";
    FileUploadTypes["3dml"] = "text/vnd.in3d.3dml";
    FileUploadTypes["spot"] = "text/vnd.in3d.spot";
    FileUploadTypes["igs"] = "model/iges";
    FileUploadTypes["i2g"] = "application/vnd.intergeo";
    FileUploadTypes["cdy"] = "application/vnd.cinderella";
    FileUploadTypes["xpw"] = "application/vnd.intercon.formnet";
    FileUploadTypes["fcs"] = "application/vnd.isac.fcs";
    FileUploadTypes["ipfix"] = "application/ipfix";
    FileUploadTypes["cer"] = "application/pkix-cert";
    FileUploadTypes["pki"] = "application/pkixcmp";
    FileUploadTypes["crl"] = "application/pkix-crl";
    FileUploadTypes["pkipath"] = "application/pkix-pkipath";
    FileUploadTypes["igm"] = "application/vnd.insors.igm";
    FileUploadTypes["rcprofile"] = "application/vnd.ipunplugged.rcprofile";
    FileUploadTypes["irp"] = "application/vnd.irepository.package+xml";
    FileUploadTypes["jad"] = "text/vnd.sun.j2me.app-descriptor";
    FileUploadTypes["jar"] = "application/java-archive";
    FileUploadTypes["class"] = "application/java-vm";
    FileUploadTypes["jnlp"] = "application/x-java-jnlp-file";
    FileUploadTypes["ser"] = "application/java-serialized-object";
    FileUploadTypes["java"] = "text/x-java-source,java";
    FileUploadTypes["js"] = "application/javascript";
    FileUploadTypes["json"] = "application/json";
    FileUploadTypes["joda"] = "application/vnd.joost.joda-archive";
    FileUploadTypes["jpm"] = "video/jpm";
    FileUploadTypes["jpg"] = "image/jpeg";
    FileUploadTypes["pjpeg"] = "image/pjpeg";
    FileUploadTypes["jpgv"] = "video/jpeg";
    FileUploadTypes["ktz"] = "application/vnd.kahootz";
    FileUploadTypes["mmd"] = "application/vnd.chipnuts.karaoke-mmd";
    FileUploadTypes["karbon"] = "application/vnd.kde.karbon";
    FileUploadTypes["chrt"] = "application/vnd.kde.kchart";
    FileUploadTypes["kfo"] = "application/vnd.kde.kformula";
    FileUploadTypes["flw"] = "application/vnd.kde.kivio";
    FileUploadTypes["kon"] = "application/vnd.kde.kontour";
    FileUploadTypes["kpr"] = "application/vnd.kde.kpresenter";
    FileUploadTypes["ksp"] = "application/vnd.kde.kspread";
    FileUploadTypes["kwd"] = "application/vnd.kde.kword";
    FileUploadTypes["htke"] = "application/vnd.kenameaapp";
    FileUploadTypes["kia"] = "application/vnd.kidspiration";
    FileUploadTypes["kne"] = "application/vnd.kinar";
    FileUploadTypes["sse"] = "application/vnd.kodak-descriptor";
    FileUploadTypes["lasxml"] = "application/vnd.las.las+xml";
    FileUploadTypes["latex"] = "application/x-latex";
    FileUploadTypes["lbd"] = "application/vnd.llamagraphics.life-balance.desktop";
    FileUploadTypes["lbe"] = "application/vnd.llamagraphics.life-balance.exchange+xml";
    FileUploadTypes["jam"] = "application/vnd.jam";
    FileUploadTypes["apr"] = "application/vnd.lotus-approach";
    FileUploadTypes["pre"] = "application/vnd.lotus-freelance";
    FileUploadTypes["nsf"] = "application/vnd.lotus-notes";
    FileUploadTypes["org"] = "application/vnd.lotus-organizer";
    FileUploadTypes["scm"] = "application/vnd.lotus-screencam";
    FileUploadTypes["lwp"] = "application/vnd.lotus-wordpro";
    FileUploadTypes["lvp"] = "audio/vnd.lucent.voice";
    FileUploadTypes["m3u"] = "audio/x-mpegurl";
    FileUploadTypes["m4v"] = "video/x-m4v";
    FileUploadTypes["hqx"] = "application/mac-binhex40";
    FileUploadTypes["portpkg"] = "application/vnd.macports.portpkg";
    FileUploadTypes["mgp"] = "application/vnd.osgeo.mapguide.package";
    FileUploadTypes["mrc"] = "application/marc";
    FileUploadTypes["mrcx"] = "application/marcxml+xml";
    FileUploadTypes["mxf"] = "application/mxf";
    FileUploadTypes["nbp"] = "application/vnd.wolfram.player";
    FileUploadTypes["ma"] = "application/mathematica";
    FileUploadTypes["mathml"] = "application/mathml+xml";
    FileUploadTypes["mbox"] = "application/mbox";
    FileUploadTypes["mc1"] = "application/vnd.medcalcdata";
    FileUploadTypes["mscml"] = "application/mediaservercontrol+xml";
    FileUploadTypes["cdkey"] = "application/vnd.mediastation.cdkey";
    FileUploadTypes["mwf"] = "application/vnd.mfer";
    FileUploadTypes["mfm"] = "application/vnd.mfmp";
    FileUploadTypes["msh"] = "model/mesh";
    FileUploadTypes["mads"] = "application/mads+xml";
    FileUploadTypes["mets"] = "application/mets+xml";
    FileUploadTypes["mods"] = "application/mods+xml";
    FileUploadTypes["meta4"] = "application/metalink4+xml";
    FileUploadTypes["mcd"] = "application/vnd.mcd";
    FileUploadTypes["flo"] = "application/vnd.micrografx.flo";
    FileUploadTypes["igx"] = "application/vnd.micrografx.igx";
    FileUploadTypes["es3"] = "application/vnd.eszigno3+xml";
    FileUploadTypes["mdb"] = "application/x-msaccess";
    FileUploadTypes["asf"] = "video/x-ms-asf";
    FileUploadTypes["exe"] = "application/x-msdownload";
    FileUploadTypes["cil"] = "application/vnd.ms-artgalry";
    FileUploadTypes["cab"] = "application/vnd.ms-cab-compressed";
    FileUploadTypes["ims"] = "application/vnd.ms-ims";
    FileUploadTypes["application"] = "application/x-ms-application";
    FileUploadTypes["clp"] = "application/x-msclip";
    FileUploadTypes["mdi"] = "image/vnd.ms-modi";
    FileUploadTypes["eot"] = "application/vnd.ms-fontobject";
    FileUploadTypes["xls"] = "application/vnd.ms-excel";
    FileUploadTypes["xlam"] = "application/vnd.ms-excel.addin.macroenabled.12";
    FileUploadTypes["xlsb"] = "application/vnd.ms-excel.sheet.binary.macroenabled.12";
    FileUploadTypes["xltm"] = "application/vnd.ms-excel.template.macroenabled.12";
    FileUploadTypes["xlsm"] = "application/vnd.ms-excel.sheet.macroenabled.12";
    FileUploadTypes["chm"] = "application/vnd.ms-htmlhelp";
    FileUploadTypes["crd"] = "application/x-mscardfile";
    FileUploadTypes["lrm"] = "application/vnd.ms-lrm";
    FileUploadTypes["mvb"] = "application/x-msmediaview";
    FileUploadTypes["mny"] = "application/x-msmoney";
    FileUploadTypes["pptx"] = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
    FileUploadTypes["sldx"] = "application/vnd.openxmlformats-officedocument.presentationml.slide";
    FileUploadTypes["ppsx"] = "application/vnd.openxmlformats-officedocument.presentationml.slideshow";
    FileUploadTypes["potx"] = "application/vnd.openxmlformats-officedocument.presentationml.template";
    FileUploadTypes["xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    FileUploadTypes["xltx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.template";
    FileUploadTypes["docx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    FileUploadTypes["dotx"] = "application/vnd.openxmlformats-officedocument.wordprocessingml.template";
    FileUploadTypes["obd"] = "application/x-msbinder";
    FileUploadTypes["thmx"] = "application/vnd.ms-officetheme";
    FileUploadTypes["onetoc"] = "application/onenote";
    FileUploadTypes["pya"] = "audio/vnd.ms-playready.media.pya";
    FileUploadTypes["pyv"] = "video/vnd.ms-playready.media.pyv";
    FileUploadTypes["ppt"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["ppa"] = "application/vnd.ms-powerpoint";
    FileUploadTypes["ppam"] = "application/vnd.ms-powerpoint.addin.macroenabled.12";
    FileUploadTypes["sldm"] = "application/vnd.ms-powerpoint.slide.macroenabled.12";
    FileUploadTypes["pptm"] = "application/vnd.ms-powerpoint.presentation.macroenabled.12";
    FileUploadTypes["ppsm"] = "application/vnd.ms-powerpoint.slideshow.macroenabled.12";
    FileUploadTypes["potm"] = "application/vnd.ms-powerpoint.template.macroenabled.12";
    FileUploadTypes["mpp"] = "application/vnd.ms-project";
    FileUploadTypes["pub"] = "application/x-mspublisher";
    FileUploadTypes["scd"] = "application/x-msschedule";
    FileUploadTypes["xap"] = "application/x-silverlight-app";
    FileUploadTypes["stl"] = "application/vnd.ms-pki.stl";
    FileUploadTypes["cat"] = "application/vnd.ms-pki.seccat";
    FileUploadTypes["vsd"] = "application/vnd.visio";
    FileUploadTypes["vsdx"] = "application/vnd.visio2013";
    FileUploadTypes["wm"] = "video/x-ms-wm";
    FileUploadTypes["wma"] = "audio/x-ms-wma";
    FileUploadTypes["wax"] = "audio/x-ms-wax";
    FileUploadTypes["wmx"] = "video/x-ms-wmx";
    FileUploadTypes["wmd"] = "application/x-ms-wmd";
    FileUploadTypes["wpl"] = "application/vnd.ms-wpl";
    FileUploadTypes["wmz"] = "application/x-ms-wmz";
    FileUploadTypes["wmv"] = "video/x-ms-wmv";
    FileUploadTypes["wvx"] = "video/x-ms-wvx";
    FileUploadTypes["wmf"] = "application/x-msmetafile";
    FileUploadTypes["trm"] = "application/x-msterminal";
    FileUploadTypes["doc"] = "application/msword";
    FileUploadTypes["docm"] = "application/vnd.ms-word.document.macroenabled.12";
    FileUploadTypes["dotm"] = "application/vnd.ms-word.template.macroenabled.12";
    FileUploadTypes["wri"] = "application/x-mswrite";
    FileUploadTypes["wps"] = "application/vnd.ms-works";
    FileUploadTypes["xbap"] = "application/x-ms-xbap";
    FileUploadTypes["xps"] = "application/vnd.ms-xpsdocument";
    FileUploadTypes["mid"] = "audio/midi";
    FileUploadTypes["mpy"] = "application/vnd.ibm.minipay";
    FileUploadTypes["afp"] = "application/vnd.ibm.modcap";
    FileUploadTypes["rms"] = "application/vnd.jcp.javame.midlet-rms";
    FileUploadTypes["tmo"] = "application/vnd.tmobile-livetv";
    FileUploadTypes["prc"] = "application/x-mobipocket-ebook";
    FileUploadTypes["mbk"] = "application/vnd.mobius.mbk";
    FileUploadTypes["dis"] = "application/vnd.mobius.dis";
    FileUploadTypes["plc"] = "application/vnd.mobius.plc";
    FileUploadTypes["mqy"] = "application/vnd.mobius.mqy";
    FileUploadTypes["msl"] = "application/vnd.mobius.msl";
    FileUploadTypes["txf"] = "application/vnd.mobius.txf";
    FileUploadTypes["daf"] = "application/vnd.mobius.daf";
    FileUploadTypes["fly"] = "text/vnd.fly";
    FileUploadTypes["mpc"] = "application/vnd.mophun.certificate";
    FileUploadTypes["mpn"] = "application/vnd.mophun.application";
    FileUploadTypes["mj2"] = "video/mj2";
    FileUploadTypes["mpga"] = "audio/mpeg";
    FileUploadTypes["mxu"] = "video/vnd.mpegurl";
    FileUploadTypes["mpeg"] = "video/mpeg";
    FileUploadTypes["m21"] = "application/mp21";
    FileUploadTypes["mp4a"] = "audio/mp4";
    FileUploadTypes["mp4"] = "video/mp4";
    FileUploadTypes["m3u8"] = "application/vnd.apple.mpegurl";
    FileUploadTypes["mus"] = "application/vnd.musician";
    FileUploadTypes["msty"] = "application/vnd.muvee.style";
    FileUploadTypes["mxml"] = "application/xv+xml";
    FileUploadTypes["ngdat"] = "application/vnd.nokia.n-gage.data";
    FileUploadTypes["n-gage"] = "application/vnd.nokia.n-gage.symbian.install";
    FileUploadTypes["ncx"] = "application/x-dtbncx+xml";
    FileUploadTypes["nc"] = "application/x-netcdf";
    FileUploadTypes["nlu"] = "application/vnd.neurolanguage.nlu";
    FileUploadTypes["dna"] = "application/vnd.dna";
    FileUploadTypes["nnd"] = "application/vnd.noblenet-directory";
    FileUploadTypes["nns"] = "application/vnd.noblenet-sealer";
    FileUploadTypes["nnw"] = "application/vnd.noblenet-web";
    FileUploadTypes["rpst"] = "application/vnd.nokia.radio-preset";
    FileUploadTypes["rpss"] = "application/vnd.nokia.radio-presets";
    FileUploadTypes["n3"] = "text/n3";
    FileUploadTypes["edm"] = "application/vnd.novadigm.edm";
    FileUploadTypes["edx"] = "application/vnd.novadigm.edx";
    FileUploadTypes["ext"] = "application/vnd.novadigm.ext";
    FileUploadTypes["gph"] = "application/vnd.flographit";
    FileUploadTypes["ecelp4800"] = "audio/vnd.nuera.ecelp4800";
    FileUploadTypes["ecelp7470"] = "audio/vnd.nuera.ecelp7470";
    FileUploadTypes["ecelp9600"] = "audio/vnd.nuera.ecelp9600";
    FileUploadTypes["oda"] = "application/oda";
    FileUploadTypes["ogx"] = "application/ogg";
    FileUploadTypes["oga"] = "audio/ogg";
    FileUploadTypes["ogv"] = "video/ogg";
    FileUploadTypes["dd2"] = "application/vnd.oma.dd2+xml";
    FileUploadTypes["oth"] = "application/vnd.oasis.opendocument.text-web";
    FileUploadTypes["opf"] = "application/oebps-package+xml";
    FileUploadTypes["qbo"] = "application/vnd.intu.qbo";
    FileUploadTypes["oxt"] = "application/vnd.openofficeorg.extension";
    FileUploadTypes["osf"] = "application/vnd.yamaha.openscoreformat";
    FileUploadTypes["weba"] = "audio/webm";
    FileUploadTypes["webm"] = "video/webm";
    FileUploadTypes["odc"] = "application/vnd.oasis.opendocument.chart";
    FileUploadTypes["otc"] = "application/vnd.oasis.opendocument.chart-template";
    FileUploadTypes["odb"] = "application/vnd.oasis.opendocument.database";
    FileUploadTypes["odf"] = "application/vnd.oasis.opendocument.formula";
    FileUploadTypes["odft"] = "application/vnd.oasis.opendocument.formula-template";
    FileUploadTypes["odg"] = "application/vnd.oasis.opendocument.graphics";
    FileUploadTypes["otg"] = "application/vnd.oasis.opendocument.graphics-template";
    FileUploadTypes["odi"] = "application/vnd.oasis.opendocument.image";
    FileUploadTypes["oti"] = "application/vnd.oasis.opendocument.image-template";
    FileUploadTypes["odp"] = "application/vnd.oasis.opendocument.presentation";
    FileUploadTypes["otp"] = "application/vnd.oasis.opendocument.presentation-template";
    FileUploadTypes["ods"] = "application/vnd.oasis.opendocument.spreadsheet";
    FileUploadTypes["ots"] = "application/vnd.oasis.opendocument.spreadsheet-template";
    FileUploadTypes["odt"] = "application/vnd.oasis.opendocument.text";
    FileUploadTypes["odm"] = "application/vnd.oasis.opendocument.text-master";
    FileUploadTypes["ott"] = "application/vnd.oasis.opendocument.text-template";
    FileUploadTypes["ktx"] = "image/ktx";
    FileUploadTypes["sxc"] = "application/vnd.sun.xml.calc";
    FileUploadTypes["stc"] = "application/vnd.sun.xml.calc.template";
    FileUploadTypes["sxd"] = "application/vnd.sun.xml.draw";
    FileUploadTypes["std"] = "application/vnd.sun.xml.draw.template";
    FileUploadTypes["sxi"] = "application/vnd.sun.xml.impress";
    FileUploadTypes["sti"] = "application/vnd.sun.xml.impress.template";
    FileUploadTypes["sxm"] = "application/vnd.sun.xml.math";
    FileUploadTypes["sxw"] = "application/vnd.sun.xml.writer";
    FileUploadTypes["sxg"] = "application/vnd.sun.xml.writer.global";
    FileUploadTypes["stw"] = "application/vnd.sun.xml.writer.template";
    FileUploadTypes["otf"] = "application/x-font-otf";
    FileUploadTypes["osfpvg"] = "application/vnd.yamaha.openscoreformat.osfpvg+xml";
    FileUploadTypes["dp"] = "application/vnd.osgi.dp";
    FileUploadTypes["pdb"] = "application/vnd.palm";
    FileUploadTypes["p"] = "text/x-pascal";
    FileUploadTypes["paw"] = "application/vnd.pawaafile";
    FileUploadTypes["pclxl"] = "application/vnd.hp-pclxl";
    FileUploadTypes["efif"] = "application/vnd.picsel";
    FileUploadTypes["pcx"] = "image/x-pcx";
    FileUploadTypes["psd"] = "image/vnd.adobe.photoshop";
    FileUploadTypes["prf"] = "application/pics-rules";
    FileUploadTypes["pic"] = "image/x-pict";
    FileUploadTypes["chat"] = "application/x-chat";
    FileUploadTypes["p10"] = "application/pkcs10";
    FileUploadTypes["p12"] = "application/x-pkcs12";
    FileUploadTypes["p7m"] = "application/pkcs7-mime";
    FileUploadTypes["p7s"] = "application/pkcs7-signature";
    FileUploadTypes["p7r"] = "application/x-pkcs7-certreqresp";
    FileUploadTypes["p7b"] = "application/x-pkcs7-certificates";
    FileUploadTypes["p8"] = "application/pkcs8";
    FileUploadTypes["plf"] = "application/vnd.pocketlearn";
    FileUploadTypes["pnm"] = "image/x-portable-anymap";
    FileUploadTypes["pbm"] = "image/x-portable-bitmap";
    FileUploadTypes["pcf"] = "application/x-font-pcf";
    FileUploadTypes["pfr"] = "application/font-tdpfr";
    FileUploadTypes["pgn"] = "application/x-chess-pgn";
    FileUploadTypes["pgm"] = "image/x-portable-graymap";
    FileUploadTypes["png"] = "image/png";
    FileUploadTypes["ppm"] = "image/x-portable-pixmap";
    FileUploadTypes["pskcxml"] = "application/pskc+xml";
    FileUploadTypes["pml"] = "application/vnd.ctc-posml";
    FileUploadTypes["ai"] = "application/postscript";
    FileUploadTypes["pfa"] = "application/x-font-type1";
    FileUploadTypes["pbd"] = "application/vnd.powerbuilder6";
    FileUploadTypes["pgp"] = "application/pgp-encrypted";
    FileUploadTypes["box"] = "application/vnd.previewsystems.box";
    FileUploadTypes["ptid"] = "application/vnd.pvi.ptid1";
    FileUploadTypes["pls"] = "application/pls+xml";
    FileUploadTypes["str"] = "application/vnd.pg.format";
    FileUploadTypes["ei6"] = "application/vnd.pg.osasli";
    FileUploadTypes["dsc"] = "text/prs.lines.tag";
    FileUploadTypes["psf"] = "application/x-font-linux-psf";
    FileUploadTypes["qps"] = "application/vnd.publishare-delta-tree";
    FileUploadTypes["wg"] = "application/vnd.pmi.widget";
    FileUploadTypes["qxd"] = "application/vnd.quark.quarkxpress";
    FileUploadTypes["esf"] = "application/vnd.epson.esf";
    FileUploadTypes["msf"] = "application/vnd.epson.msf";
    FileUploadTypes["ssf"] = "application/vnd.epson.ssf";
    FileUploadTypes["qam"] = "application/vnd.epson.quickanime";
    FileUploadTypes["qfx"] = "application/vnd.intu.qfx";
    FileUploadTypes["qt"] = "video/quicktime";
    FileUploadTypes["rar"] = "application/x-rar-compressed";
    FileUploadTypes["ram"] = "audio/x-pn-realaudio";
    FileUploadTypes["rmp"] = "audio/x-pn-realaudio-plugin";
    FileUploadTypes["rsd"] = "application/rsd+xml";
    FileUploadTypes["rm"] = "application/vnd.rn-realmedia";
    FileUploadTypes["bed"] = "application/vnd.realvnc.bed";
    FileUploadTypes["mxl"] = "application/vnd.recordare.musicxml";
    FileUploadTypes["musicxml"] = "application/vnd.recordare.musicxml+xml";
    FileUploadTypes["rnc"] = "application/relax-ng-compact-syntax";
    FileUploadTypes["rdz"] = "application/vnd.data-vision.rdz";
    FileUploadTypes["rdf"] = "application/rdf+xml";
    FileUploadTypes["rp9"] = "application/vnd.cloanto.rp9";
    FileUploadTypes["jisp"] = "application/vnd.jisp";
    FileUploadTypes["rtf"] = "application/rtf";
    FileUploadTypes["rtx"] = "text/richtext";
    FileUploadTypes["link66"] = "application/vnd.route66.link66+xml";
    FileUploadTypes["rss"] = "application/rss+xml,";
    FileUploadTypes["shf"] = "application/shf+xml";
    FileUploadTypes["st"] = "application/vnd.sailingtracker.track";
    FileUploadTypes["svg"] = "image/svg+xml";
    FileUploadTypes["sus"] = "application/vnd.sus-calendar";
    FileUploadTypes["sru"] = "application/sru+xml";
    FileUploadTypes["setpay"] = "application/set-payment-initiation";
    FileUploadTypes["setreg"] = "application/set-registration-initiation";
    FileUploadTypes["sema"] = "application/vnd.sema";
    FileUploadTypes["semd"] = "application/vnd.semd";
    FileUploadTypes["semf"] = "application/vnd.semf";
    FileUploadTypes["see"] = "application/vnd.seemail";
    FileUploadTypes["snf"] = "application/x-font-snf";
    FileUploadTypes["spq"] = "application/scvp-vp-request";
    FileUploadTypes["spp"] = "application/scvp-vp-response";
    FileUploadTypes["scq"] = "application/scvp-cv-request";
    FileUploadTypes["scs"] = "application/scvp-cv-response";
    FileUploadTypes["sdp"] = "application/sdp";
    FileUploadTypes["etx"] = "text/x-setext";
    FileUploadTypes["movie"] = "video/x-sgi-movie";
    FileUploadTypes["ifm"] = "application/vnd.shana.informed.formdata";
    FileUploadTypes["itp"] = "application/vnd.shana.informed.formtemplate";
    FileUploadTypes["iif"] = "application/vnd.shana.informed.interchange";
    FileUploadTypes["ipk"] = "application/vnd.shana.informed.package";
    FileUploadTypes["tfi"] = "application/thraud+xml";
    FileUploadTypes["shar"] = "application/x-shar";
    FileUploadTypes["rgb"] = "image/x-rgb";
    FileUploadTypes["slt"] = "application/vnd.epson.salt";
    FileUploadTypes["aso"] = "application/vnd.accpac.simply.aso";
    FileUploadTypes["imp"] = "application/vnd.accpac.simply.imp";
    FileUploadTypes["twd"] = "application/vnd.simtech-mindmapper";
    FileUploadTypes["csp"] = "application/vnd.commonspace";
    FileUploadTypes["saf"] = "application/vnd.yamaha.smaf-audio";
    FileUploadTypes["mmf"] = "application/vnd.smaf";
    FileUploadTypes["spf"] = "application/vnd.yamaha.smaf-phrase";
    FileUploadTypes["teacher"] = "application/vnd.smart.teacher";
    FileUploadTypes["svd"] = "application/vnd.svd";
    FileUploadTypes["rq"] = "application/sparql-query";
    FileUploadTypes["srx"] = "application/sparql-results+xml";
    FileUploadTypes["gram"] = "application/srgs";
    FileUploadTypes["grxml"] = "application/srgs+xml";
    FileUploadTypes["ssml"] = "application/ssml+xml";
    FileUploadTypes["skp"] = "application/vnd.koan";
    FileUploadTypes["sgml"] = "text/sgml";
    FileUploadTypes["sdc"] = "application/vnd.stardivision.calc";
    FileUploadTypes["sda"] = "application/vnd.stardivision.draw";
    FileUploadTypes["sdd"] = "application/vnd.stardivision.impress";
    FileUploadTypes["smf"] = "application/vnd.stardivision.math";
    FileUploadTypes["sdw"] = "application/vnd.stardivision.writer";
    FileUploadTypes["sgl"] = "application/vnd.stardivision.writer-global";
    FileUploadTypes["sm"] = "application/vnd.stepmania.stepchart";
    FileUploadTypes["sit"] = "application/x-stuffit";
    FileUploadTypes["sitx"] = "application/x-stuffitx";
    FileUploadTypes["sdkm"] = "application/vnd.solent.sdkm+xml";
    FileUploadTypes["xo"] = "application/vnd.olpc-sugar";
    FileUploadTypes["au"] = "audio/basic";
    FileUploadTypes["wqd"] = "application/vnd.wqd";
    FileUploadTypes["sis"] = "application/vnd.symbian.install";
    FileUploadTypes["smi"] = "application/smil+xml";
    FileUploadTypes["xsm"] = "application/vnd.syncml+xml";
    FileUploadTypes["bdm"] = "application/vnd.syncml.dm+wbxml";
    FileUploadTypes["xdm"] = "application/vnd.syncml.dm+xml";
    FileUploadTypes["sv4cpio"] = "application/x-sv4cpio";
    FileUploadTypes["sv4crc"] = "application/x-sv4crc";
    FileUploadTypes["sbml"] = "application/sbml+xml";
    FileUploadTypes["tsv"] = "text/tab-separated-values";
    FileUploadTypes["tiff"] = "image/tiff";
    FileUploadTypes["tao"] = "application/vnd.tao.intent-module-archive";
    FileUploadTypes["tar"] = "application/x-tar";
    FileUploadTypes["tcl"] = "application/x-tcl";
    FileUploadTypes["tex"] = "application/x-tex";
    FileUploadTypes["tfm"] = "application/x-tex-tfm";
    FileUploadTypes["tei"] = "application/tei+xml";
    FileUploadTypes["txt"] = "text/plain";
    FileUploadTypes["dxp"] = "application/vnd.spotfire.dxp";
    FileUploadTypes["sfs"] = "application/vnd.spotfire.sfs";
    FileUploadTypes["tsd"] = "application/timestamped-data";
    FileUploadTypes["tpt"] = "application/vnd.trid.tpt";
    FileUploadTypes["mxs"] = "application/vnd.triscape.mxs";
    FileUploadTypes["t"] = "text/troff";
    FileUploadTypes["tra"] = "application/vnd.trueapp";
    FileUploadTypes["ttf"] = "application/x-font-ttf";
    FileUploadTypes["ttl"] = "text/turtle";
    FileUploadTypes["umj"] = "application/vnd.umajin";
    FileUploadTypes["uoml"] = "application/vnd.uoml+xml";
    FileUploadTypes["unityweb"] = "application/vnd.unity";
    FileUploadTypes["ufd"] = "application/vnd.ufdl";
    FileUploadTypes["uri"] = "text/uri-list";
    FileUploadTypes["utz"] = "application/vnd.uiq.theme";
    FileUploadTypes["ustar"] = "application/x-ustar";
    FileUploadTypes["uu"] = "text/x-uuencode";
    FileUploadTypes["vcs"] = "text/x-vcalendar";
    FileUploadTypes["vcf"] = "text/x-vcard";
    FileUploadTypes["vcd"] = "application/x-cdlink";
    FileUploadTypes["vsf"] = "application/vnd.vsf";
    FileUploadTypes["wrl"] = "model/vrml";
    FileUploadTypes["vcx"] = "application/vnd.vcx";
    FileUploadTypes["mts"] = "model/vnd.mts";
    FileUploadTypes["vtu"] = "model/vnd.vtu";
    FileUploadTypes["vis"] = "application/vnd.visionary";
    FileUploadTypes["viv"] = "video/vnd.vivo";
    FileUploadTypes["ccxml"] = "application/ccxml+xml,";
    FileUploadTypes["vxml"] = "application/voicexml+xml";
    FileUploadTypes["src"] = "application/x-wais-source";
    FileUploadTypes["wbxml"] = "application/vnd.wap.wbxml";
    FileUploadTypes["wbmp"] = "image/vnd.wap.wbmp";
    FileUploadTypes["wav"] = "audio/x-wav";
    FileUploadTypes["davmount"] = "application/davmount+xml";
    FileUploadTypes["woff"] = "application/x-font-woff";
    FileUploadTypes["wspolicy"] = "application/wspolicy+xml";
    FileUploadTypes["webp"] = "image/webp";
    FileUploadTypes["wtb"] = "application/vnd.webturbo";
    FileUploadTypes["wgt"] = "application/widget";
    FileUploadTypes["hlp"] = "application/winhlp";
    FileUploadTypes["wml"] = "text/vnd.wap.wml";
    FileUploadTypes["wmls"] = "text/vnd.wap.wmlscript";
    FileUploadTypes["wmlsc"] = "application/vnd.wap.wmlscriptc";
    FileUploadTypes["wpd"] = "application/vnd.wordperfect";
    FileUploadTypes["stf"] = "application/vnd.wt.stf";
    FileUploadTypes["wsdl"] = "application/wsdl+xml";
    FileUploadTypes["xbm"] = "image/x-xbitmap";
    FileUploadTypes["xpm"] = "image/x-xpixmap";
    FileUploadTypes["xwd"] = "image/x-xwindowdump";
    FileUploadTypes["der"] = "application/x-x509-ca-cert";
    FileUploadTypes["fig"] = "application/x-xfig";
    FileUploadTypes["xhtml"] = "application/xhtml+xml";
    FileUploadTypes["xml"] = "application/xml";
    FileUploadTypes["xdf"] = "application/xcap-diff+xml";
    FileUploadTypes["xenc"] = "application/xenc+xml";
    FileUploadTypes["xer"] = "application/patch-ops-error+xml";
    FileUploadTypes["rl"] = "application/resource-lists+xml";
    FileUploadTypes["rs"] = "application/rls-services+xml";
    FileUploadTypes["rld"] = "application/resource-lists-diff+xml";
    FileUploadTypes["xslt"] = "application/xslt+xml";
    FileUploadTypes["xop"] = "application/xop+xml";
    FileUploadTypes["xpi"] = "application/x-xpinstall";
    FileUploadTypes["xspf"] = "application/xspf+xml";
    FileUploadTypes["xul"] = "application/vnd.mozilla.xul+xml";
    FileUploadTypes["xyz"] = "chemical/x-xyz";
    FileUploadTypes["yaml"] = "text/yaml";
    FileUploadTypes["yang"] = "application/yang";
    FileUploadTypes["yin"] = "application/yin+xml";
    FileUploadTypes["zir"] = "application/vnd.zul";
    FileUploadTypes["zip"] = "application/zip";
})(FileUploadTypes || (FileUploadTypes = {}));

function IsNullOrEmpty(value) {
    return value == null || value.length === 0;
}

class FileUploadService {
    constructor(renderer) {
        this.renderer = renderer;
        this.extensions = ['B', 'KB', 'MB', 'GB'];
        this.sizeRegex = new RegExp(`^(\\d+)(?:\\s{0,1})(${this.extensions.join('|')})?$`, 'i');
    }
    isFileDragDropAvailable() {
        const div = this.renderer.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div));
    }
    parseSize(value) {
        if (IsNullOrEmpty(value)) {
            return 0;
        }
        if (typeof value === 'number') {
            return value;
        }
        const [, size, extension] = value.match(this.sizeRegex) || [null, '0', 'B'];
        const i = IsNullOrEmpty(extension) ? 0 : this.extensions.indexOf(extension.toUpperCase());
        return parseInt(size, 10) * Math.pow(1024, i < 0 ? 0 : i);
    }
    formatSize(size) {
        return this.calculateSize(size);
    }
    calculateSize(size, extensionIndex = 0) {
        if (isNaN(size)) {
            size = 0;
        }
        if (size < 1024) {
            return `${Math.round(size * 100) / 100} ${this.extensions[extensionIndex]}`;
        }
        return this.calculateSize(size / 1024, extensionIndex + 1);
    }
    getFileType(file) {
        return Object.keys(FileUploadTypes).find((key) => FileUploadTypes[key] === file.type);
    }
}
FileUploadService.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadService, deps: [{ token: i0.Renderer2 }], target: i0.????FactoryTarget.Injectable });
FileUploadService.??prov = i0.????ngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadService });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }]; } });

const InsertAnimation = trigger('insertAnimation', [
    transition('* => *', [
        query(':leave', [
            stagger(30, [
                animate('.3s', style({ opacity: 0 }))
            ])
        ], { optional: true }),
        query(':enter', [
            style({ opacity: 0 }),
            stagger(30, [
                animate('.3s', style({ opacity: 1 }))
            ])
        ], { optional: true })
    ])
]);

const ZoomAnimation = trigger('zoomAnimation', [
    transition('static => zoomOut', [
        animate(250, style({ transform: 'translate(-50%, -50%) scale(2, 2)', opacity: 0 })),
    ]),
    transition('static => zoomIn', [
        query(':self', [
            style({ transform: 'translate(-50%, -50%) scale(.2, .2)', opacity: 0, top: '50%', left: '50%', margin: 0 }),
            stagger(50, [
                animate(250, style({ transform: 'translate(-50%, -50%) scale(1, 1)', opacity: 1 }))
            ])
        ])
    ])
]);

var STATUS;
(function (STATUS) {
    STATUS[STATUS["INVALID"] = 0] = "INVALID";
    STATUS[STATUS["VALID"] = 1] = "VALID";
    STATUS[STATUS["DISABLED"] = 2] = "DISABLED";
})(STATUS || (STATUS = {}));
var FileEvent;
(function (FileEvent) {
    FileEvent["click"] = "click";
    FileEvent["focus"] = "focus";
    FileEvent["blur"] = "blur";
})(FileEvent || (FileEvent = {}));
class FileUploadControl {
    constructor(configuration, validators) {
        this.files = new Map();
        this.listVisible = true;
        this.status = STATUS.VALID;
        this.errors = [];
        this.validators = [];
        this.multipleEnabled = true;
        this.nativeBehavior = false;
        this.multipleChanged = new BehaviorSubject(this.multipleEnabled);
        this.statusChanged = new Subject();
        this.eventsChanged = new Subject();
        this.discardedValue = new Subject();
        this.accept = null;
        this.discard = false;
        this.acceptChanged = new BehaviorSubject(this.accept);
        /**
         * track status `VALID`, `INVALID` or `DISABLED`
         */
        this.statusChanges = this.statusChanged.asObservable();
        /**
         * emit an event every time the value of the control
         * changes.
         * Initially returns last value
         */
        this.valueChanges = new BehaviorSubject([]);
        /**
         * @internal
         * used to trigger layout change for list visibility
         */
        this.listVisibilityChanges = new BehaviorSubject(this.listVisible);
        /**
         * track changed on accept attribute
         */
        this.acceptChanges = this.acceptChanged.asObservable();
        /**
         * emit an event every time user programmatically ask for certain event
         */
        this.eventsChanges = this.eventsChanged.asObservable();
        /**
         * track changed on multiple attribute
         */
        this.multipleChanges = this.multipleChanged.asObservable();
        /**
         * track which files were discarded
         */
        this.discardedValueChanges = this.discardedValue.asObservable();
        this.initialState(configuration);
        this.defineValidators(validators);
    }
    /**
     * set functions that determines the synchronous validity of this control.
     */
    setValidators(newValidators) {
        this.defineValidators(newValidators);
        this.validate();
        return this;
    }
    addFile(file) {
        return this.addMultipleFiles([file]);
    }
    removeFile(file) {
        if (!this.disabled) {
            this.files.delete(file.name);
            this.validate();
            this.valueChanges.next(Array.from(this.files.values()));
        }
        return this;
    }
    addFiles(files) {
        return this.addMultipleFiles(Array.from(files));
    }
    get valid() {
        return this.errors.length === 0 && this.status !== STATUS.DISABLED;
    }
    get invalid() {
        return this.errors.length > 0;
    }
    getError() {
        return this.errors;
    }
    /**
     * number of uploaded files
     */
    get size() {
        return this.files.size;
    }
    /**
     * return list of Files
     */
    get value() {
        return Array.from(this.files.values());
    }
    setValue(files) {
        this.files.clear();
        if (files instanceof Array) {
            this.addMultipleFiles(files);
        }
        else {
            throw Error(`FormControl.setValue was provided with wrong argument type, ${files} was provided instead Array<File>`);
        }
        return this;
    }
    /**
     * reset the control
     */
    clear() {
        this.files.clear();
        this.validate();
        this.valueChanges.next(Array.from(this.files.values()));
        return this;
    }
    get isListVisible() {
        return this.listVisible;
    }
    setListVisibility(isVisible = true) {
        this.listVisible = isVisible;
        this.listVisibilityChanges.next(this.listVisible);
        return this;
    }
    get disabled() {
        return this.status === STATUS.DISABLED;
    }
    enable(isEnabled = true) {
        this.status = isEnabled ? STATUS.VALID : STATUS.DISABLED;
        this.validate();
        this.statusChanged.next(this.status);
        return this;
    }
    disable(isDisabled = true) {
        this.status = isDisabled ? STATUS.DISABLED : STATUS.VALID;
        this.validate();
        this.statusChanged.next(this.status);
        return this;
    }
    click() {
        this.eventsChanged.next(FileEvent.click);
        return this;
    }
    focus() {
        this.eventsChanged.next(FileEvent.focus);
        return this;
    }
    blur() {
        this.eventsChanged.next(FileEvent.blur);
        return this;
    }
    /**
     * specifies the types of files that the server accepts
     *
     * ### Example
     *
     * ```
     * acceptFiles("file_extension|audio/*|video/*|image/*|media_type")
     * ```
     *
     * To specify more than one value, separate the values with a comma (e.g. acceptFiles("audio/*,video/*,image/*").
     *
     */
    acceptFiles(accept) {
        this.accept = accept;
        this.acceptChanged.next(this.accept);
        return this;
    }
    acceptAll() {
        this.accept = null;
        this.acceptChanged.next(this.accept);
        return this;
    }
    get isMultiple() {
        return this.multipleEnabled;
    }
    multiple(isEnabled = true) {
        this.multipleEnabled = isEnabled;
        this.multipleChanged.next(this.multipleEnabled);
        return this;
    }
    native(isNativeBehaviorEnabled = true) {
        this.nativeBehavior = isNativeBehaviorEnabled;
        return this;
    }
    discardInvalid(discard = true) {
        this.discard = discard;
        return this;
    }
    initialState(configuration = {}) {
        if (IsNullOrEmpty(configuration)) {
            return;
        }
        /**
         * Toggles discard of all invalid files
         * it depends to accept, limit, size once a file
         * dropped or selected it will be discarded if does not satisfy the constraint
         */
        this.discard = configuration.discardInvalid || this.discard;
        this.status = !!configuration.disabled ? STATUS.DISABLED : this.status;
        this.multipleEnabled = configuration.multiple || this.multipleEnabled;
        this.nativeBehavior = configuration.native != null ? configuration.native : this.nativeBehavior;
        if (!IsNullOrEmpty(configuration.listVisible)) {
            this.setListVisibility(configuration.listVisible);
        }
        if (!IsNullOrEmpty(configuration.accept)) {
            this.acceptFiles(configuration.accept.join(','));
        }
    }
    defineValidators(validators) {
        if (!IsNullOrEmpty(validators)) {
            this.validators = Array.isArray(validators) ? [...validators] : [validators];
        }
    }
    /**
     * @internal
     * used to prevent valueChanges emit more times
     * when multiple files are uploaded
     */
    addMultipleFiles(files) {
        if (IsNullOrEmpty(files)) {
            this.validate();
            this.valueChanges.next(Array.from(this.files.values()));
            return this;
        }
        /**
         * native component deletes the list of files before adding new ones
         */
        if (this.nativeBehavior !== false) {
            this.files.clear();
        }
        if (!this.multipleEnabled) {
            /**
             * if multiple is disabled and one file exists
             * clear it and reupload a new one
             */
            if (this.files.size === 1) {
                this.files.clear();
            }
            // add only one file
            this.files.set(files[0].name, files[0]);
        }
        else {
            // replace files with same name
            files.forEach(file => this.files.set(file.name, file));
        }
        if (this.discard) {
            this.analyzeToDiscard();
        }
        else {
            this.validate();
        }
        this.valueChanges.next(Array.from(this.files.values()));
        return this;
    }
    /**
     * method used to discard invalid files
     */
    analyzeToDiscard() {
        const deletedFiles = [];
        const validators = [...this.validators];
        while (validators.length) {
            const validator = validators.shift();
            const error = validator(this);
            if (error) {
                this.discardFile(error, deletedFiles);
            }
        }
        if (deletedFiles.length) {
            this.discardedValue.next(deletedFiles);
        }
    }
    discardFile(error, deletedFiles) {
        const errorsKey = Object.keys(error)[0];
        const errors = error[errorsKey];
        (Array.isArray(errors) ? errors : [errors]).forEach(fileError => {
            if (fileError.file && this.files.has(fileError.file.name)) {
                deletedFiles.push(fileError);
                this.files.delete(fileError.file.name);
            }
            else {
                this.errors.push(error);
            }
        });
    }
    validate() {
        if (this.status !== STATUS.DISABLED) {
            const currentState = this.valid;
            this.errors = this.validators.map((validator) => validator(this)).filter((isInvalid) => isInvalid);
            if (currentState !== this.valid) {
                this.statusChanged.next(this.valid ? STATUS.VALID : STATUS.INVALID);
            }
        }
        else {
            this.errors.length = 0;
        }
    }
}

class FileUploadAbstract {
    constructor(hostElementRef, renderer, cdr) {
        this.hostElementRef = hostElementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.control = null;
        this.isMultiple = true;
        this.hooks = [];
        this.subscriptions = [];
        this.onChange = () => { };
    }
    ngOnInit() {
        if (IsNullOrEmpty(this.control)) {
            this.control = new FileUploadControl();
        }
        this.setEvents();
        this.checkAndMarkAsDisabled();
        this.checkAndSetMultiple();
        this.connectToForm();
    }
    ngOnDestroy() {
        this.cdr.detach();
        this.hooks.forEach((hook) => hook());
        this.hooks.length = 0;
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    setEvents() {
        this.subscriptions.push(this.control.statusChanges.subscribe((status) => this.checkAndMarkAsDisabled()));
        this.subscriptions.push(this.control.eventsChanges.subscribe((event) => this.triggerEvent(event)));
        this.subscriptions.push(this.control.acceptChanges.subscribe((accept) => this.updateAcceptAttr(accept)));
        this.subscriptions.push(this.control.multipleChanges.subscribe((isMultiple) => this.toggleMultiple(isMultiple)));
    }
    clearInputEl() {
        this.input.nativeElement.value = null;
    }
    checkAndSetMultiple() {
        if (!this.control) {
            return;
        }
        const isMultiple = !(this.isMultiple === false || this.isMultiple === 'false');
        if (isMultiple !== this.control.isMultiple) {
            this.control.multiple(isMultiple);
        }
    }
    triggerEvent(event) {
        if (typeof this.label.nativeElement[event] === 'function') {
            this.label.nativeElement[event]();
        }
    }
    updateAcceptAttr(accept) {
        if (!IsNullOrEmpty(accept)) {
            this.renderer.setAttribute(this.input.nativeElement, 'accept', accept);
        }
        else {
            this.renderer.removeAttribute(this.input.nativeElement, 'accept');
        }
    }
    checkAndMarkAsDisabled() {
        if (this.control.disabled) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', true);
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
            this.renderer.setProperty(this.input.nativeElement, 'disabled', false);
        }
    }
    toggleMultiple(isMultiple) {
        if (isMultiple) {
            this.renderer.setAttribute(this.input.nativeElement, 'multiple', '');
        }
        else {
            this.renderer.removeAttribute(this.input.nativeElement, 'multiple');
        }
    }
    /**
     * ControlValueAccessor implementation
     */
    connectToForm() {
        this.subscriptions.push(this.control.valueChanges.subscribe((v) => this.onChange(v)));
    }
}
FileUploadAbstract.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadAbstract, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.????FactoryTarget.Directive });
FileUploadAbstract.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadAbstract, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadAbstract, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; } });

class FileUploadDropZoneComponent {
}
FileUploadDropZoneComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadDropZoneComponent, deps: [], target: i0.????FactoryTarget.Component });
FileUploadDropZoneComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadDropZoneComponent, selector: "file-upload-drop-zone", ngImport: i0, template: "<div class=\"icon\">\r\n    <svg viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n        </g>\r\n    </svg>\r\n</div>\r\n\r\n<div class=\"upload-text\">\r\n    <ng-content></ng-content>\r\n</div>", styles: [":host{display:block}.icon{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon svg{fill:#909293}.upload-text{overflow:hidden;width:auto;position:relative;padding-left:20px}:host-context(.list-visible) .upload-text{display:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadDropZoneComponent, decorators: [{
            type: Component,
            args: [{ selector: `file-upload-drop-zone`, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"icon\">\r\n    <svg viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n        </g>\r\n    </svg>\r\n</div>\r\n\r\n<div class=\"upload-text\">\r\n    <ng-content></ng-content>\r\n</div>", styles: [":host{display:block}.icon{height:35px;width:35px;border:1px solid #eaeaea;border-radius:4px}.icon svg{fill:#909293}.upload-text{overflow:hidden;width:auto;position:relative;padding-left:20px}:host-context(.list-visible) .upload-text{display:none}\n"] }]
        }] });

class FileUploadIconComponent {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
        this.fileType = 'unknown';
    }
    ngOnInit() {
        this.fileType = this.fileUploadService.getFileType(this.file);
    }
    isIcon(type) {
        switch (type) {
            case 'text':
                return this.fileType === 'html' || this.fileType === 'css' ||
                    this.fileType === 'csv' || this.fileType === 'js' ||
                    this.fileType === 'pdf' || this.fileType === 'ppt' ||
                    this.fileType === 'xls' || this.fileType === 'xlsx' ||
                    this.fileType === 'xml' || this.fileType === 'doc' ||
                    this.fileType === 'txt' || this.fileType === 'docx';
            case 'audio':
                return this.fileType === 'aac' || this.fileType === 'midi' ||
                    this.fileType === 'oga' || this.fileType === 'wav' ||
                    this.fileType === 'weba';
            case 'image':
                return this.fileType === 'png' || this.fileType === 'bmp' ||
                    this.fileType === 'gif' || this.fileType === 'jpg' ||
                    this.fileType === 'svg' || this.fileType === 'webp' ||
                    this.fileType === 'ico';
            case 'video':
                return this.fileType === 'avi' || this.fileType === 'mpeg' ||
                    this.fileType === 'ogv' || this.fileType === 'webm' ||
                    this.fileType === '3gp' || this.fileType === '3g2';
        }
    }
}
FileUploadIconComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadIconComponent, deps: [{ token: FileUploadService }], target: i0.????FactoryTarget.Component });
FileUploadIconComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadIconComponent, selector: "file-upload-icon", inputs: { file: "file" }, ngImport: i0, template: "\r\n\r\n<ng-container [ngSwitch]=\"true\">\r\n\r\n    <svg *ngSwitchDefault viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('image')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\r\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\r\n                C40.6,51.7,39.1,52.3,37.3,52.3z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('audio')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\r\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\r\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\r\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\r\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\r\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\r\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\r\n                C48.9,64.4,49.4,64.6,49.9,64.6z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('text')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\r\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\r\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\r\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('video')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\r\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\r\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\r\n                C64.2,43.7,64.3,43.7,64.5,43.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n</ng-container>", styles: [":host{display:block;border:1px solid #eaeaea;border-radius:4px}:host svg{fill:#909293}\n"], directives: [{ type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadIconComponent, decorators: [{
            type: Component,
            args: [{ selector: `file-upload-icon`, changeDetection: ChangeDetectionStrategy.OnPush, template: "\r\n\r\n<ng-container [ngSwitch]=\"true\">\r\n\r\n    <svg *ngSwitchDefault viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('image')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M65.1,58.7v10.7H30.9V63l6.4-6.4l4.3,4.3L54.4,48L65.1,58.7z M37.3,52.3c-1.8,0-3.3-0.6-4.6-1.9c-1.3-1.2-1.9-2.8-1.9-4.6\r\n                c0-1.8,0.6-3.3,1.9-4.6c1.3-1.2,2.8-1.9,4.6-1.9s3.3,0.6,4.6,1.9c1.3,1.3,1.9,2.8,1.9,4.6c0,1.8-0.6,3.3-1.9,4.6\r\n                C40.6,51.7,39.1,52.3,37.3,52.3z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('audio')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M43,46.5c0.4,0.2,0.7,0.5,0.7,1v18.2c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.8-0.3l-5.6-5.6h-4.4\r\n                c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8v-6.4c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h4.4l5.6-5.6\r\n                C42.2,46.4,42.6,46.3,43,46.5z M57,69.5c0.7,0,1.3-0.3,1.7-0.8c2.9-3.5,4.3-7.6,4.3-12.2s-1.4-8.6-4.3-12.2\r\n                c-0.4-0.5-0.8-0.7-1.4-0.8c-0.6-0.1-1.1,0.1-1.6,0.5c-0.5,0.4-0.7,0.9-0.8,1.5c-0.1,0.6,0.1,1.1,0.5,1.6c2.2,2.7,3.3,5.9,3.3,9.4\r\n                c0,3.5-1.1,6.7-3.3,9.4c-0.4,0.5-0.5,1-0.5,1.6c0.1,0.6,0.3,1.1,0.8,1.4C56.1,69.4,56.5,69.5,57,69.5z M49.9,64.6\r\n                c0.6,0,1.1-0.2,1.6-0.7c1.9-2.1,2.9-4.5,2.9-7.3s-1-5.3-2.9-7.3c-0.4-0.4-0.9-0.6-1.5-0.7c-0.6,0-1.1,0.2-1.5,0.6s-0.6,0.9-0.7,1.5\r\n                c0,0.6,0.2,1.1,0.6,1.6c1.2,1.3,1.7,2.7,1.7,4.4c0,1.7-0.6,3.1-1.7,4.4c-0.4,0.4-0.6,1-0.6,1.6c0,0.6,0.2,1.1,0.7,1.5\r\n                C48.9,64.4,49.4,64.6,49.9,64.6z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('text')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M35.1,44.8c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3h23.6c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1\r\n                c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8V44.8z M59.8,52.3\r\n                c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z M59.8,60.9c0.3,0,0.6,0.1,0.8,0.3\r\n                c0.2,0.2,0.3,0.5,0.3,0.8v2.1c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3H36.2c-0.3,0-0.6-0.1-0.8-0.3\r\n                c-0.2-0.2-0.3-0.5-0.3-0.8v-2.1c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3H59.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n    <svg *ngSwitchCase=\"isIcon('video')\" viewBox=\"0 0 96 96\">\r\n        <g>\r\n            <path d=\"M71.4,30.7c0.6,0.6,1.2,1.5,1.6,2.5c0.4,1.1,0.7,2.1,0.7,2.9v38.6c0,0.9-0.3,1.7-0.9,2.3\r\n                S71.4,78,70.5,78h-45c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V21.2c0-0.9,0.3-1.7,0.9-2.3c0.6-0.6,1.4-0.9,2.3-0.9h30\r\n                c0.9,0,1.9,0.2,2.9,0.7c1.1,0.4,1.9,1,2.5,1.6L71.4,30.7z M56.6,22.6v12.6h12.6c-0.2-0.6-0.5-1.1-0.7-1.4L57.9,23.3\r\n                C57.7,23,57.2,22.8,56.6,22.6z M69.4,73.7V39.4H55.5c-0.9,0-1.7-0.3-2.3-0.9c-0.6-0.6-0.9-1.4-0.9-2.3V22.3H26.6v51.4H69.4z\r\n                M48,43.7c1.2,0,2.2,0.4,3,1.3c0.8,0.8,1.3,1.9,1.3,3v12.9c0,1.2-0.4,2.2-1.3,3c-0.8,0.8-1.9,1.3-3,1.3H35.1c-1.2,0-2.2-0.4-3-1.3\r\n                c-0.8-0.8-1.3-1.9-1.3-3V48c0-1.2,0.4-2.2,1.3-3c0.8-0.8,1.9-1.3,3-1.3H48z M64.5,43.8c0.4,0.2,0.7,0.5,0.7,1v19.3\r\n                c0,0.5-0.2,0.8-0.7,1c-0.2,0-0.3,0.1-0.4,0.1c-0.3,0-0.6-0.1-0.8-0.3l-8.9-8.9v-3l8.9-8.9c0.2-0.2,0.5-0.3,0.8-0.3\r\n                C64.2,43.7,64.3,43.7,64.5,43.8z\"/>\r\n        </g>\r\n    </svg>\r\n\r\n</ng-container>", styles: [":host{display:block;border:1px solid #eaeaea;border-radius:4px}:host svg{fill:#909293}\n"] }]
        }], ctorParameters: function () { return [{ type: FileUploadService }]; }, propDecorators: { file: [{
                type: Input
            }] } });

class FileUploadListItemComponent {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    removeFile(file) {
        this.control.removeFile(file);
    }
    calculateSize(size) {
        return this.fileUploadService.formatSize(size);
    }
}
FileUploadListItemComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadListItemComponent, deps: [{ token: FileUploadService }], target: i0.????FactoryTarget.Component });
FileUploadListItemComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadListItemComponent, selector: "file-upload-list-item", inputs: { index: "index", file: "file", control: "control" }, ngImport: i0, template: `
    <file-upload-icon [file]="file"></file-upload-icon>
    <div class="file-info">
        <span class="file-name">{{ file.name }}</span> ({{ calculateSize( file.size ) }})
    </div>
    <div class="file-buttons">
        <span class="remove-btn" (click)="removeFile(file)">
        <svg viewBox="0 0 96 96">
            <g>
                <path d="M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4
                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3
                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4
                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5
                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4
                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5
                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5
                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5
                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"/>
            </g>
        </svg> <ng-content></ng-content></span>
    </div>
    `, isInline: true, styles: ["@charset \"UTF-8\";:host{display:block;font-size:14px;color:#646464}:host:after{clear:both;content:\"\\a0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn{font-size:12px;cursor:pointer}.remove-btn svg{display:inline-block;vertical-align:-20%;height:18px;width:18px}\n"], components: [{ type: FileUploadIconComponent, selector: "file-upload-icon", inputs: ["file"] }] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadListItemComponent, decorators: [{
            type: Component,
            args: [{ selector: `file-upload-list-item`, template: `
    <file-upload-icon [file]="file"></file-upload-icon>
    <div class="file-info">
        <span class="file-name">{{ file.name }}</span> ({{ calculateSize( file.size ) }})
    </div>
    <div class="file-buttons">
        <span class="remove-btn" (click)="removeFile(file)">
        <svg viewBox="0 0 96 96">
            <g>
                <path d="M40.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S39.6,38,39.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4
                    s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4S40.5,67.1,40.5,66.8z M50.5,66.8V39.3
                    c0-0.4-0.1-0.7-0.4-0.9S49.6,38,49.3,38h-2.5c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4
                    h2.5c0.4,0,0.7-0.1,0.9-0.4S50.5,67.1,50.5,66.8z M60.5,66.8V39.3c0-0.4-0.1-0.7-0.4-0.9S59.6,38,59.3,38h-2.5
                    c-0.4,0-0.7,0.1-0.9,0.4s-0.4,0.5-0.4,0.9v27.5c0,0.4,0.1,0.7,0.4,0.9s0.5,0.4,0.9,0.4h2.5c0.4,0,0.7-0.1,0.9-0.4
                    S60.5,67.1,60.5,66.8z M39.3,28h17.5l-1.9-4.6c-0.2-0.2-0.4-0.4-0.7-0.4H41.8c-0.3,0.1-0.5,0.2-0.7,0.4L39.3,28z M75.5,29.3v2.5
                    c0,0.4-0.1,0.7-0.4,0.9S74.6,33,74.3,33h-3.8v37c0,2.2-0.6,4-1.8,5.6S66,78,64.3,78H31.8c-1.7,0-3.2-0.8-4.4-2.3s-1.8-3.4-1.8-5.5
                    V33h-3.8c-0.4,0-0.7-0.1-0.9-0.4s-0.4-0.5-0.4-0.9v-2.5c0-0.4,0.1-0.7,0.4-0.9s0.5-0.4,0.9-0.4h12.1l2.7-6.5c0.4-1,1.1-1.8,2.1-2.5
                    s2-1,3.1-1h12.5c1,0,2.1,0.3,3.1,1s1.7,1.5,2.1,2.5l2.7,6.5h12.1c0.4,0,0.7,0.1,0.9,0.4S75.5,28.9,75.5,29.3z"/>
            </g>
        </svg> <ng-content></ng-content></span>
    </div>
    `, styles: ["@charset \"UTF-8\";:host{display:block;font-size:14px;color:#646464}:host:after{clear:both;content:\"\\a0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}file-upload-icon{float:left;width:30px;height:36px;margin:0 10px 0 0}.file-info{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.remove-btn{font-size:12px;cursor:pointer}.remove-btn svg{display:inline-block;vertical-align:-20%;height:18px;width:18px}\n"] }]
        }], ctorParameters: function () { return [{ type: FileUploadService }]; }, propDecorators: { index: [{
                type: Input
            }], file: [{
                type: Input
            }], control: [{
                type: Input
            }] } });

const DRAGOVER = 'dragover';
const TOUCHED = 'ng-touched';
class FileUploadComponent extends FileUploadAbstract {
    constructor(fileUploadService, hostElementRef, renderer, document, cdr) {
        super(hostElementRef, renderer, cdr);
        this.fileUploadService = fileUploadService;
        this.document = document;
        this.control = null;
        this.animation = true;
        this.templateRef = null;
        this.listItem = null;
        this.templateContext = {
            $implicit: this.fileUploadService.isFileDragDropAvailable(),
            isFileDragDropAvailable: this.fileUploadService.isFileDragDropAvailable()
        };
        /** animation fields */
        this.zoomText = 'static';
        this.listVisible = false;
        this.onTouch = () => {
            this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED);
        };
    }
    set multiple(isMultiple) {
        this.isMultiple = isMultiple;
        this.checkAndSetMultiple();
    }
    get hasFiles() {
        return this.control.isListVisible && this.control.size > 0;
    }
    get isInvalid() {
        return !this.control.disabled && this.control.invalid;
    }
    get isAnimationDisabled() {
        return this.animation === false || this.animation === 'false';
    }
    trackByFn(index, item) {
        return item.name;
    }
    setEvents() {
        super.setEvents();
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.document, eventName, (event) => this.preventDragEvents(event)));
        });
        ['dragover', 'dragenter'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragOver(event)));
        });
        ['dragleave', 'dragend', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragLeave(event)));
        });
        this.subscriptions.push(this.control.valueChanges.subscribe((files) => this.renderView()));
        this.subscriptions.push(this.control.listVisibilityChanges.subscribe((status) => this.toggleListVisibility()));
    }
    onKeyDown(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.control.click();
        }
    }
    preventDragEvents(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    renderView() {
        if (!this.listVisible) {
            this.zoomText = this.control.isListVisible && this.control.size > 0 ? 'zoomOut' : 'static';
        }
        this.cdr.markForCheck();
    }
    showList() {
        if (this.zoomText !== 'static') {
            this.listVisible = true;
        }
    }
    hideList() {
        this.listVisible = false;
    }
    toggleListVisibility() {
        this.listVisible = this.control.isListVisible && this.control.size > 0;
        if (this.listVisible) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
            this.zoomText = 'static';
        }
        this.cdr.markForCheck();
    }
    /**
     * on file over add class name
     */
    onDragOver(event) {
        this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    /**
     * on mouse out remove class name
     */
    onDragLeave(event) {
        this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    onDrop(event) {
        if (this.control.disabled) {
            return;
        }
        // There is some issue with DragEvent in typescript lib.dom.d.ts
        const files = event.dataTransfer.files;
        this.control.addFiles(files);
        this.onTouch();
    }
    onInputChange(event) {
        const input = (event.target);
        if (!this.control.disabled && input.files.length > 0) {
            this.control.addFiles(input.files);
            this.clearInputEl();
        }
        this.onTouch();
    }
    /**
     * model -> view changes
     */
    writeValue(files) {
        if (files != null) {
            this.control.setValue(files);
        }
    }
    /**
     * register function which will be called on UI change
     * to update view -> model
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.control.disable(isDisabled);
    }
    zoomAnimationDone(event) {
        if (this.control.isListVisible && this.control.size > 0) {
            this.showList();
        }
        else {
            this.hideList();
        }
        if (event.fromState === 'static' && event.toState === 'zoomOut') {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'hide-text');
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'hide-text');
        }
        if (event.toState === 'zoomIn') {
            this.zoomText = 'static';
        }
    }
    animationListFinished(event) {
        if (event.toState === 'void') {
            this.zoomText = 'zoomIn';
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'list-visible');
        }
        if (event.fromState === 'void') {
            this.zoomText = 'static';
            this.renderer.addClass(this.hostElementRef.nativeElement, 'list-visible');
        }
    }
}
FileUploadComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadComponent, deps: [{ token: FileUploadService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: DOCUMENT }, { token: i0.ChangeDetectorRef }], target: i0.????FactoryTarget.Component });
FileUploadComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadComponent, selector: "file-upload:not([simple])", inputs: { control: "control", animation: "animation", multiple: "multiple" }, host: { listeners: { "drop": "onDrop($event)" }, properties: { "class.has-files": "this.hasFiles", "class.ng-invalid": "this.isInvalid", "@.disabled": "this.isAnimationDisabled" } }, providers: [
        FileUploadService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileUploadComponent),
            multi: true
        }
    ], queries: [{ propertyName: "templateRef", first: true, predicate: ["placeholder"], descendants: true }, { propertyName: "listItem", first: true, predicate: ["item"], descendants: true }], viewQueries: [{ propertyName: "input", first: true, predicate: ["inputRef"], descendants: true, static: true }, { propertyName: "label", first: true, predicate: ["labelRef"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<label #labelRef class=\"upload-input\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\" [@zoomAnimation]=\"zoomText\" (@zoomAnimation.done)=\"zoomAnimationDone($event)\">\r\n\r\n    <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : defaultTemplate; context: templateContext\"></ng-container>\r\n\r\n    <ng-template #defaultTemplate let-isFileDragDropAvailable=\"isFileDragDropAvailable\">\r\n        <file-upload-drop-zone>\r\n            <ng-container *ngIf=\"isFileDragDropAvailable; else isNotDragDropAvailable\">\r\n                <b>Drag and drop</b> files<br> or click here\r\n            </ng-container>\r\n            <ng-template #isNotDragDropAvailable>\r\n                <b>Click here</b> to<br> choose a files\r\n            </ng-template>\r\n        </file-upload-drop-zone>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" multiple (change)=\"onInputChange($event)\">\r\n</label>\r\n\r\n<div class=\"upload-list\" *ngIf=\"(control.listVisibilityChanges | async) && control.size > 0 && listVisible\" [@insertAnimation]=\"control.size\" (@insertAnimation.done)=\"animationListFinished($event)\">\r\n    <ng-template ngFor let-file let-i=\"index\" [ngForOf]=\"control.valueChanges | async\" [ngForTrackBy]=\"trackByFn\">\r\n        <ng-container *ngTemplateOutlet=\"listItem ? listItem : defaultItemTemplate; context: { $implicit: file, file: file, index: i, control: control }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultItemTemplate let-i=\"index\" let-file=\"file\" let-control=\"control\">\r\n        <file-upload-list-item  [index]=\"i\" [file]=\"file\" [control]=\"control\">Remove</file-upload-list-item>\r\n    </ng-template>\r\n</div>", styles: ["@charset \"UTF-8\";:host,:host>*{box-sizing:border-box}:host{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:1px dashed #92b0b3;outline-offset:-10px;position:relative}:host ::ng-deep .icon{float:left}:host(.dragover){outline-width:2px}:host(.disabled){opacity:.5;cursor:no-drop}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.upload-input:after{clear:both;content:\"\\a0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);outline:none}:host(.disabled) .upload-input{cursor:not-allowed}:host(.list-visible) .upload-input{top:20px;left:100%;margin-left:-20px;-ms-transform:translate(-100%,0);transform:translate(-100%);text-align:center}:host(.hide-text) .upload-input{opacity:0}:host(.dragover:not(.disabled)) .upload-input,:host(:not(.disabled)) .upload-input:hover,:host(:not(.disabled)) .upload-input:focus{color:#80a9d2}:host(.dragover:not(.disabled)) .icon svg,:host(:not(.disabled)) .upload-input:hover svg,:host(:not(.disabled)) .upload-input:focus svg{fill:#80a9d2}file-upload-list-item{padding:10px 0 0}file-upload-list-item:first-child{padding:0}\n"], components: [{ type: FileUploadDropZoneComponent, selector: "file-upload-drop-zone" }, { type: FileUploadListItemComponent, selector: "file-upload-list-item", inputs: ["index", "file", "control"] }], directives: [{ type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i2.AsyncPipe }, animations: [
        ZoomAnimation,
        InsertAnimation
    ], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadComponent, decorators: [{
            type: Component,
            args: [{ selector: `file-upload:not([simple])`, providers: [
                        FileUploadService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => FileUploadComponent),
                            multi: true
                        }
                    ], changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                        ZoomAnimation,
                        InsertAnimation
                    ], template: "<label #labelRef class=\"upload-input\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\" [@zoomAnimation]=\"zoomText\" (@zoomAnimation.done)=\"zoomAnimationDone($event)\">\r\n\r\n    <ng-container *ngTemplateOutlet=\"templateRef ? templateRef : defaultTemplate; context: templateContext\"></ng-container>\r\n\r\n    <ng-template #defaultTemplate let-isFileDragDropAvailable=\"isFileDragDropAvailable\">\r\n        <file-upload-drop-zone>\r\n            <ng-container *ngIf=\"isFileDragDropAvailable; else isNotDragDropAvailable\">\r\n                <b>Drag and drop</b> files<br> or click here\r\n            </ng-container>\r\n            <ng-template #isNotDragDropAvailable>\r\n                <b>Click here</b> to<br> choose a files\r\n            </ng-template>\r\n        </file-upload-drop-zone>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" multiple (change)=\"onInputChange($event)\">\r\n</label>\r\n\r\n<div class=\"upload-list\" *ngIf=\"(control.listVisibilityChanges | async) && control.size > 0 && listVisible\" [@insertAnimation]=\"control.size\" (@insertAnimation.done)=\"animationListFinished($event)\">\r\n    <ng-template ngFor let-file let-i=\"index\" [ngForOf]=\"control.valueChanges | async\" [ngForTrackBy]=\"trackByFn\">\r\n        <ng-container *ngTemplateOutlet=\"listItem ? listItem : defaultItemTemplate; context: { $implicit: file, file: file, index: i, control: control }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultItemTemplate let-i=\"index\" let-file=\"file\" let-control=\"control\">\r\n        <file-upload-list-item  [index]=\"i\" [file]=\"file\" [control]=\"control\">Remove</file-upload-list-item>\r\n    </ng-template>\r\n</div>", styles: ["@charset \"UTF-8\";:host,:host>*{box-sizing:border-box}:host{overflow:hidden;display:block;background:#fafafa;padding:20px 66px 20px 20px;min-height:140px;outline:1px dashed #92b0b3;outline-offset:-10px;position:relative}:host ::ng-deep .icon{float:left}:host(.dragover){outline-width:2px}:host(.disabled){opacity:.5;cursor:no-drop}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.upload-input:after{clear:both;content:\"\\a0\";display:block;height:0;line-height:0;visibility:hidden;zoom:1}.upload-input{cursor:pointer;display:inline-block;color:#646464;position:absolute;top:50%;left:50%;margin:0;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);outline:none}:host(.disabled) .upload-input{cursor:not-allowed}:host(.list-visible) .upload-input{top:20px;left:100%;margin-left:-20px;-ms-transform:translate(-100%,0);transform:translate(-100%);text-align:center}:host(.hide-text) .upload-input{opacity:0}:host(.dragover:not(.disabled)) .upload-input,:host(:not(.disabled)) .upload-input:hover,:host(:not(.disabled)) .upload-input:focus{color:#80a9d2}:host(.dragover:not(.disabled)) .icon svg,:host(:not(.disabled)) .upload-input:hover svg,:host(:not(.disabled)) .upload-input:focus svg{fill:#80a9d2}file-upload-list-item{padding:10px 0 0}file-upload-list-item:first-child{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: FileUploadService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { control: [{
                type: Input
            }], animation: [{
                type: Input
            }], multiple: [{
                type: Input,
                args: ['multiple']
            }], templateRef: [{
                type: ContentChild,
                args: ['placeholder']
            }], listItem: [{
                type: ContentChild,
                args: ['item']
            }], input: [{
                type: ViewChild,
                args: ['inputRef', { static: true }]
            }], label: [{
                type: ViewChild,
                args: ['labelRef', { static: true }]
            }], hasFiles: [{
                type: HostBinding,
                args: ['class.has-files']
            }], isInvalid: [{
                type: HostBinding,
                args: ['class.ng-invalid']
            }], isAnimationDisabled: [{
                type: HostBinding,
                args: ['@.disabled']
            }], onDrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }] } });

class FileUploadAttributeComponent {
    constructor(fileUploadService, hostElementRef, renderer, document) {
        this.fileUploadService = fileUploadService;
        this.hostElementRef = hostElementRef;
        this.renderer = renderer;
        this.document = document;
        this.control = null;
        this.templateRef = null;
        this.hooks = [];
        this.subscriptions = [];
        this.onTouch = () => {
            this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED);
        };
    }
    ngOnInit() {
        if (IsNullOrEmpty(this.control)) {
            this.control = new FileUploadControl();
        }
    }
    ngAfterViewInit() {
        if (this.fileUploadService.isFileDragDropAvailable()) {
            this.setEvents();
            this.checkAndMarkAsDisabled();
        }
    }
    ngOnDestroy() {
        this.hooks.forEach((hook) => hook());
        this.hooks.length = 0;
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
        this.subscriptions.length = 0;
    }
    get hasFiles() {
        return this.control.isListVisible && this.control.size > 0;
    }
    get isInvalid() {
        return !this.control.disabled && this.control.invalid;
    }
    setEvents() {
        ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.document, eventName, (event) => this.preventDragEvents(event)));
        });
        ['dragover', 'dragenter'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => this.onDragOver(event)));
        });
        ['dragleave', 'dragend', 'drop'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.hostElementRef.nativeElement, eventName, (event) => {
                if (this.control.disabled && eventName === 'dragleave' || eventName !== 'dragleave') {
                    this.onDragLeave(event);
                }
            }));
        });
        ['dragleave'].forEach((eventName) => {
            this.hooks.push(this.renderer.listen(this.overlay.nativeElement, eventName, (event) => this.onDragLeave(event)));
        });
        this.subscriptions.push(this.control.statusChanges.subscribe((status) => this.checkAndMarkAsDisabled()));
    }
    checkAndMarkAsDisabled() {
        if (this.control.disabled) {
            this.renderer.addClass(this.hostElementRef.nativeElement, 'disabled');
        }
        else {
            this.renderer.removeClass(this.hostElementRef.nativeElement, 'disabled');
        }
    }
    preventDragEvents(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    /**
     * on file over add class name
     */
    onDragOver(event) {
        this.renderer.addClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    /**
     * on mouse out remove class name
     */
    onDragLeave(event) {
        this.renderer.removeClass(this.hostElementRef.nativeElement, DRAGOVER);
    }
    onDrop(event) {
        if (this.control.disabled) {
            return;
        }
        const files = event.dataTransfer.files;
        this.control.addFiles(files);
        this.onTouch();
    }
}
FileUploadAttributeComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadAttributeComponent, deps: [{ token: FileUploadService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.????FactoryTarget.Component });
FileUploadAttributeComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: FileUploadAttributeComponent, selector: "[file-drop-zone]", inputs: { control: "control" }, host: { listeners: { "drop": "onDrop($event)" }, properties: { "class.has-files": "this.hasFiles", "class.ng-invalid": "this.isInvalid" } }, providers: [
        FileUploadService
    ], queries: [{ propertyName: "templateRef", first: true, predicate: ["placeholder"], descendants: true }], viewQueries: [{ propertyName: "overlay", first: true, predicate: ["overlay"], descendants: true }], ngImport: i0, template: `
        <ng-content></ng-content>
        <div #overlay class="overlay" *ngIf="fileUploadService.isFileDragDropAvailable()">

            <div class="upload-input">
                <ng-container *ngTemplateOutlet="templateRef ? templateRef : defaultTemplate"></ng-container>

                <ng-template #defaultTemplate>
                    <file-upload-drop-zone>
                        <b>Drop</b> it here
                    </file-upload-drop-zone>
                </ng-template>
            </div>
        </div>
    `, isInline: true, styles: [":host{position:relative;display:block}:host .overlay{display:none;background:rgba(255,255,255,.8);outline:2px dashed #92b0b3;outline-offset:-10px;position:absolute;top:0;left:0;right:0;bottom:0}:host(.dragover:not(.disabled)) .overlay{display:block}:host ::ng-deep .icon{margin:0 auto 10px}:host ::ng-deep .icon svg{fill:#80a9d2}.upload-input{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:all .15s ease-in-out}\n"], components: [{ type: FileUploadDropZoneComponent, selector: "file-upload-drop-zone" }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadAttributeComponent, decorators: [{
            type: Component,
            args: [{ selector: `[file-drop-zone]`, template: `
        <ng-content></ng-content>
        <div #overlay class="overlay" *ngIf="fileUploadService.isFileDragDropAvailable()">

            <div class="upload-input">
                <ng-container *ngTemplateOutlet="templateRef ? templateRef : defaultTemplate"></ng-container>

                <ng-template #defaultTemplate>
                    <file-upload-drop-zone>
                        <b>Drop</b> it here
                    </file-upload-drop-zone>
                </ng-template>
            </div>
        </div>
    `, providers: [
                        FileUploadService
                    ], styles: [":host{position:relative;display:block}:host .overlay{display:none;background:rgba(255,255,255,.8);outline:2px dashed #92b0b3;outline-offset:-10px;position:absolute;top:0;left:0;right:0;bottom:0}:host(.dragover:not(.disabled)) .overlay{display:block}:host ::ng-deep .icon{margin:0 auto 10px}:host ::ng-deep .icon svg{fill:#80a9d2}.upload-input{pointer-events:none;cursor:pointer;display:inline-block;color:#80a9d2;position:absolute;top:50%;left:50%;-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);transition:all .15s ease-in-out}\n"] }]
        }], ctorParameters: function () { return [{ type: FileUploadService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { control: [{
                type: Input
            }], overlay: [{
                type: ViewChild,
                args: ['overlay']
            }], templateRef: [{
                type: ContentChild,
                args: ['placeholder']
            }], hasFiles: [{
                type: HostBinding,
                args: ['class.has-files']
            }], isInvalid: [{
                type: HostBinding,
                args: ['class.ng-invalid']
            }], onDrop: [{
                type: HostListener,
                args: ['drop', ['$event']]
            }] } });

class SimpleFileUploadComponent extends FileUploadAbstract {
    constructor(fileUploadService, hostElementRef, renderer, cdr) {
        super(hostElementRef, renderer, cdr);
        this.fileUploadService = fileUploadService;
        this.control = null;
        this.buttonRef = null;
        this.placeholderRef = null;
        this.isMultiple = false;
        this.onTouch = () => {
            this.renderer.addClass(this.hostElementRef.nativeElement, TOUCHED);
        };
    }
    get hasFiles() {
        return this.control.isListVisible && this.control.size > 0;
    }
    get isInvalid() {
        return !this.control.disabled && this.control.invalid;
    }
    onInputChange(event) {
        const input = (event.target);
        if (!this.control.disabled && input.files.length > 0) {
            this.control.setValue(Array.from(input.files));
            this.clearInputEl();
        }
        this.onTouch();
    }
    /**
     * model -> view changes
     */
    writeValue(files) {
        if (files != null) {
            this.control.setValue(files);
        }
    }
    /**
     * register function which will be called on UI change
     * to update view -> model
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.control.disable(isDisabled);
    }
    onKeyDown(event) {
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.control.click();
        }
    }
}
SimpleFileUploadComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: SimpleFileUploadComponent, deps: [{ token: FileUploadService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.????FactoryTarget.Component });
SimpleFileUploadComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "12.0.0", version: "13.0.2", type: SimpleFileUploadComponent, selector: "file-upload[simple]", inputs: { control: "control" }, host: { properties: { "class.has-files": "this.hasFiles", "class.ng-invalid": "this.isInvalid" } }, providers: [
        FileUploadService,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SimpleFileUploadComponent),
            multi: true
        }
    ], queries: [{ propertyName: "buttonRef", first: true, predicate: ["button"], descendants: true }, { propertyName: "placeholderRef", first: true, predicate: ["placeholder"], descendants: true }], viewQueries: [{ propertyName: "input", first: true, predicate: ["inputRef"], descendants: true, static: true }, { propertyName: "label", first: true, predicate: ["labelRef"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"upload-text\">\r\n    <ng-template [ngIf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"placeholderRef ? placeholderRef : defaultPlaceholderTemplate; context: { $implicit: control.value[0], control: control, file: control.value[0] }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultPlaceholderTemplate let-file>\r\n        <span *ngIf=\"file; else emptyList\" class=\"file-name\">{{ file.name }}</span>\r\n\r\n        <ng-template #emptyList>\r\n            Select a file...\r\n        </ng-template>\r\n    </ng-template>\r\n</div>\r\n\r\n<label #labelRef class=\"upload-button\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\r\n    <ng-container *ngTemplateOutlet=\"buttonRef ? buttonRef : defaultButtonTemplate; context: { control: control }\"></ng-container>\r\n\r\n    <ng-template #defaultButtonTemplate>\r\n        <div class=\"button\">\r\n            <div class=\"icon\">\r\n                <svg viewBox=\"0 0 96 96\">\r\n                    <g>\r\n                        <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n            \r\n            <span class=\"button-text\">Browse</span>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" (change)=\"onInputChange($event)\">\r\n</label>", styles: [":host,:host>*{box-sizing:border-box}:host{display:-ms-flexbox;display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px rgba(0,0,0,.05)}:host(.disabled){opacity:.5}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon{height:24px;width:24px;display:inline-block}.icon svg{fill:#555}.upload-button{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:none}.upload-text{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text{vertical-align:middle;padding-left:10px}:host(.disabled) .upload-button{cursor:not-allowed}:host(:not(.disabled)) .upload-button:focus,:host(:not(.disabled)) .upload-button:hover{color:#80a9d2}:host(:not(.disabled)) .upload-button:focus svg,:host(:not(.disabled)) .upload-button:hover svg{fill:#80a9d2}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i2.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: SimpleFileUploadComponent, decorators: [{
            type: Component,
            args: [{ selector: `file-upload[simple]`, providers: [
                        FileUploadService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SimpleFileUploadComponent),
                            multi: true
                        }
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"upload-text\">\r\n    <ng-template [ngIf]=\"control.valueChanges | async\">\r\n        <ng-container *ngTemplateOutlet=\"placeholderRef ? placeholderRef : defaultPlaceholderTemplate; context: { $implicit: control.value[0], control: control, file: control.value[0] }\"></ng-container>\r\n    </ng-template>\r\n    \r\n    <ng-template #defaultPlaceholderTemplate let-file>\r\n        <span *ngIf=\"file; else emptyList\" class=\"file-name\">{{ file.name }}</span>\r\n\r\n        <ng-template #emptyList>\r\n            Select a file...\r\n        </ng-template>\r\n    </ng-template>\r\n</div>\r\n\r\n<label #labelRef class=\"upload-button\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\r\n    <ng-container *ngTemplateOutlet=\"buttonRef ? buttonRef : defaultButtonTemplate; context: { control: control }\"></ng-container>\r\n\r\n    <ng-template #defaultButtonTemplate>\r\n        <div class=\"button\">\r\n            <div class=\"icon\">\r\n                <svg viewBox=\"0 0 96 96\">\r\n                    <g>\r\n                        <path d=\"M62.8,68.1c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6s-1.1,0.2-1.5,0.6\r\n                            c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6s1.1-0.2,1.5-0.6S62.8,68.7,62.8,68.1z M71.3,68.1\r\n                            c0-0.6-0.2-1.1-0.6-1.5c-0.4-0.4-0.9-0.6-1.5-0.6c-0.6,0-1.1,0.2-1.5,0.6C67.2,67,67,67.5,67,68.1c0,0.6,0.2,1.1,0.6,1.5\r\n                            s0.9,0.6,1.5,0.6c0.6,0,1.1-0.2,1.5-0.6C71.1,69.2,71.3,68.7,71.3,68.1z M75.5,60.7v10.6c0,0.9-0.3,1.6-0.9,2.2\r\n                            c-0.6,0.6-1.4,0.9-2.2,0.9H23.7c-0.9,0-1.6-0.3-2.2-0.9c-0.6-0.6-0.9-1.4-0.9-2.2V60.7c0-0.9,0.3-1.6,0.9-2.2\r\n                            c0.6-0.6,1.4-0.9,2.2-0.9h14.1c0.5,1.2,1.2,2.2,2.3,3c1.1,0.8,2.3,1.2,3.7,1.2h8.5c1.3,0,2.6-0.4,3.7-1.2c1.1-0.8,1.9-1.8,2.3-3\r\n                            h14.1c0.9,0,1.6,0.3,2.2,0.9C75.2,59.1,75.5,59.8,75.5,60.7z M64.8,39.3c-0.4,0.9-1,1.3-2,1.3h-8.5v14.8c0,0.6-0.2,1.1-0.6,1.5\r\n                            c-0.4,0.4-0.9,0.6-1.5,0.6h-8.5c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V40.6h-8.5c-0.9,0-1.6-0.4-2-1.3\r\n                            c-0.4-0.9-0.2-1.6,0.5-2.3l14.8-14.8c0.4-0.4,0.9-0.6,1.5-0.6s1.1,0.2,1.5,0.6L64.3,37C65,37.7,65.1,38.4,64.8,39.3z\"/>\r\n                    </g>\r\n                </svg>\r\n            </div>\r\n            \r\n            <span class=\"button-text\">Browse</span>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <input #inputRef type=\"file\" class=\"files-input\" tabindex=\"-1\" (change)=\"onInputChange($event)\">\r\n</label>", styles: [":host,:host>*{box-sizing:border-box}:host{display:-ms-flexbox;display:flex;line-height:1.5;color:#555;background-color:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:inset 0 4px 7px rgba(0,0,0,.05)}:host(.disabled){opacity:.5}.files-input{width:.1px;height:.1px;opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden}.icon{height:24px;width:24px;display:inline-block}.icon svg{fill:#555}.upload-button{cursor:pointer;display:block;padding:2px 4px;background-color:#eee;border-left:1px solid #ddd;border-radius:0 4px 4px 0;min-width:100px;color:#555;margin:0;position:relative;outline:none}.upload-text{display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%;padding:5px 10px;font-size:14px;height:30px}.button-text{vertical-align:middle;padding-left:10px}:host(.disabled) .upload-button{cursor:not-allowed}:host(:not(.disabled)) .upload-button:focus,:host(:not(.disabled)) .upload-button:hover{color:#80a9d2}:host(:not(.disabled)) .upload-button:focus svg,:host(:not(.disabled)) .upload-button:hover svg{fill:#80a9d2}\n"] }]
        }], ctorParameters: function () { return [{ type: FileUploadService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { control: [{
                type: Input
            }], buttonRef: [{
                type: ContentChild,
                args: ['button']
            }], placeholderRef: [{
                type: ContentChild,
                args: ['placeholder']
            }], input: [{
                type: ViewChild,
                args: ['inputRef', { static: true }]
            }], label: [{
                type: ViewChild,
                args: ['labelRef', { static: true }]
            }], hasFiles: [{
                type: HostBinding,
                args: ['class.has-files']
            }], isInvalid: [{
                type: HostBinding,
                args: ['class.ng-invalid']
            }] } });

/**
 * function used to check file size
 */
const checkFileSize = (actualSize, maxSize, minSize = 0, file) => {
    return (!IsNullOrEmpty(maxSize) && actualSize > maxSize) || actualSize < minSize ?
        { maxSize, minSize, actual: actualSize, file } : null;
};
const getFileType = (file, fileExtension) => {
    const type = file.type;
    if (!IsNullOrEmpty(type)) {
        return type;
    }
    return FileUploadTypes[fileExtension];
};
var CheckType;
(function (CheckType) {
    CheckType[CheckType["ALLOWED"] = 0] = "ALLOWED";
    CheckType[CheckType["NOTALLOWED"] = 1] = "NOTALLOWED";
})(CheckType || (CheckType = {}));
const FILE_EXT_REG = /(^[.]\w*)$/m;
/**
 * function used to check file type
 *
 * #### allowedTypes
 * file_extension|audio/*|video/*|image/*|media_type
 */
const checkFileTypes = (file, types, checkType) => {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const fileType = getFileType(file, fileExtension);
    for (const type of types) {
        const isFound = FILE_EXT_REG.test(type) ? type === `.${fileExtension}` : new RegExp(type).test(fileType);
        if (isFound) {
            return checkType === CheckType.ALLOWED ? null : { notAllowedTypes: types, actual: fileType, file };
        }
    }
    return checkType === CheckType.ALLOWED ? { allowedTypes: types, actual: fileType, file } : null;
};
const checkValueType = (value) => {
    if (!Array.isArray(value)) {
        throw Error(`FormControl.setValue was provided with wrong argument type, ${value} was provided instead Array<File>`);
    }
};
// @dynamic
class FileUploadValidators {
    /**
     * Validator that compare the summary size of all files
     */
    static sizeLimit(maxSize) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const sum = files.map(file => file.size).reduce((a, b) => a + b, 0);
            const toLargeFiles = checkFileSize(sum, maxSize);
            return toLargeFiles ?
                { 'sizeLimit': toLargeFiles } : null;
        };
    }
    /**
     * Validator that validate individually file maximum size length.
     * Compare the File size in bytes
     * @dynamic
     */
    static fileSize(maxSize) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const toLargeFiles = files.map((file) => checkFileSize(file.size, maxSize, 0, file))
                .filter((error) => error);
            return toLargeFiles.length > 0 ?
                { 'fileSize': toLargeFiles } : null;
        };
    }
    /**
     * Compare the File size in bytes with max and min size limits
     * @dynamic
     */
    static sizeRange({ minSize, maxSize }) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const sizeMismatch = files.map((file) => checkFileSize(file.size, maxSize, minSize, file))
                .filter((error) => error);
            return sizeMismatch.length > 0 ?
                { 'sizeRange': sizeMismatch } : null;
        };
    }
    /**
     * validator that requires control to have limit on files number
     * @dynamic
     */
    static filesLimit(numFiles) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const filesLimit = files.slice(-1 * (files.length - numFiles))
                .map(file => ({ 'max': numFiles, 'actual': files.length, file }));
            return files.length > numFiles ?
                { 'filesLimit': filesLimit } : null;
        };
    }
    /**
     * validator that requires control to have limit on media types
     *
     * ##### Allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types]
     *      (https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.accept([file_extension, audio/*, video/*, image/*, media_type])`
     * @dynamic
     */
    static accept(allowedFileTypes) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const notAllowedFiles = files.map((file) => checkFileTypes(file, allowedFileTypes, CheckType.ALLOWED))
                .filter((error) => error);
            return notAllowedFiles.length > 0 ?
                { 'fileTypes': notAllowedFiles } : null;
        };
    }
    /**
     * validator that requires control to have limit on media types
     *
     * ##### Not allowed media types are
     *
     * - file_extension - a file extension starting with the STOP character,
     * e.g: .gif, .jpg, .png, .doc
     * - audio/* -        All sound files are accepted
     * - video/* -        All video files are accepted
     * - image/* -        All image files are accepted
     * - media_type -     A valid media type, with no parameters. Look at [IANA Media Types]
     *      (https://www.iana.org/assignments/media-types/media-types.xhtml) for a complete list of standard media types
     *
     * #### Example
     * `FileUploadValidators.reject([file_extension, audio/*, video/*, image/*, media_type])`
     * @dynamic
     */
    static reject(rejectFileTypes) {
        return (control) => {
            const files = control.value;
            if (IsNullOrEmpty(files)) {
                return null;
            }
            checkValueType(files);
            const notAllowedFiles = files.map((file) => checkFileTypes(file, rejectFileTypes, CheckType.NOTALLOWED))
                .filter((error) => error);
            return notAllowedFiles.length > 0 ?
                { 'fileTypes': notAllowedFiles } : null;
        };
    }
}

/**
 * A Directive that adds the `filesize` validator to controls marked with the
 * `filesize` attribute. The size of the file is in bytes or any other unit
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel filesize="830000"></file-upload>
 * <file-upload name="files" ngModel [filesize]="830000"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="6200"></file-upload>
 * <file-upload name="files" ngModel filesize="123MB"></file-upload>
 * <file-upload name="files" ngModel [filesize]="12 mb"></file-upload>
 * <file-upload name="files" ngModel minSize="0" max="324KB"></file-upload>
 * ```
 *
 */
class FileSizeValidator {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    ngOnChanges(changes) {
        if ('filesize' in changes
            || 'maxsize' in changes
            || 'minsize' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
    _createValidator() {
        let maxSize = null;
        if (!IsNullOrEmpty(this.maxsize)) {
            maxSize = this.fileUploadService.parseSize(this.maxsize);
        }
        else if (!IsNullOrEmpty(this.filesize)) {
            maxSize = this.fileUploadService.parseSize(this.filesize);
        }
        const minSize = this.fileUploadService.parseSize(this.minsize);
        this.validator = FileUploadValidators.sizeRange({ maxSize, minSize });
    }
}
FileSizeValidator.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileSizeValidator, deps: [{ token: FileUploadService }], target: i0.????FactoryTarget.Directive });
FileSizeValidator.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FileSizeValidator, selector: "file-upload[filesize][formControlName],\n    file-upload[filesize][formControl],\n    file-upload[filesize][ngModel],\n    file-upload[minsize][formControlName],\n    file-upload[minsize][formControl],\n    file-upload[minsize][ngModel],\n    file-upload[maxsize][formControlName],\n    file-upload[maxsize][formControl],\n    file-upload[maxsize][ngModel]", inputs: { filesize: "filesize", minsize: "minsize", maxsize: "maxsize" }, host: { properties: { "attr.filesize": "filesize ? filesize : null", "attr.minsize": "minsize ? minsize : null", "attr.maxsize": "maxsize ? maxsize : null" } }, providers: [{
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FileSizeValidator),
            multi: true
        }], usesOnChanges: true, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileSizeValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: `file-upload[filesize][formControlName],
    file-upload[filesize][formControl],
    file-upload[filesize][ngModel],
    file-upload[minsize][formControlName],
    file-upload[minsize][formControl],
    file-upload[minsize][ngModel],
    file-upload[maxsize][formControlName],
    file-upload[maxsize][formControl],
    file-upload[maxsize][ngModel]`,
                    providers: [{
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => FileSizeValidator),
                            multi: true
                        }],
                    host: {
                        '[attr.filesize]': 'filesize ? filesize : null',
                        '[attr.minsize]': 'minsize ? minsize : null',
                        '[attr.maxsize]': 'maxsize ? maxsize : null'
                    }
                }]
        }], ctorParameters: function () { return [{ type: FileUploadService }]; }, propDecorators: { filesize: [{
                type: Input
            }], minsize: [{
                type: Input
            }], maxsize: [{
                type: Input
            }] } });
/**
 * A Directive that adds the `fileslimit` validator to controls marked with the
 * `fileslimit` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel fileslimit="2"></file-upload>
 * <file-upload name="files" ngModel [fileslimit]="2"></file-upload>
 * ```
 *
 */
class FilesLimitValidator {
    ngOnChanges(changes) {
        if ('fileslimit' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    }
    validate(c) {
        return this.fileslimit != null ? this.validator(c) : null;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
    _createValidator() {
        this.validator = FileUploadValidators.filesLimit(typeof this.fileslimit === 'string' ? parseInt(this.fileslimit, 10) : this.fileslimit);
    }
}
FilesLimitValidator.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesLimitValidator, deps: [], target: i0.????FactoryTarget.Directive });
FilesLimitValidator.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FilesLimitValidator, selector: "file-upload[fileslimit][formControlName], file-upload[fileslimit][formControl], file-upload[fileslimit][ngModel]", inputs: { fileslimit: "fileslimit" }, host: { properties: { "attr.fileslimit": "fileslimit ? fileslimit : null" } }, providers: [{
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FilesLimitValidator),
            multi: true
        }], usesOnChanges: true, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesLimitValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: 'file-upload[fileslimit][formControlName], file-upload[fileslimit][formControl], file-upload[fileslimit][ngModel]',
                    providers: [{
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => FilesLimitValidator),
                            multi: true
                        }],
                    host: { '[attr.fileslimit]': 'fileslimit ? fileslimit : null' }
                }]
        }], propDecorators: { fileslimit: [{
                type: Input
            }] } });
/**
 * A Directive that adds the `accept` validator to controls marked with the
 * `accept` attribute.
 *
 * ### Example
 *
 * ```
 * <file-upload name="files" ngModel accept="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * <file-upload name="files" ngModel [accept]="file_extension|audio/*|video/*|image/*|media_type"></file-upload>
 * ```
 *
 * To specify more than one value, separate the values with a comma (e.g. <file-upload accept="audio/*,video/*,image/*"></file-upload>.
 *
 */
class FilesAcceptValidator {
    ngOnChanges(changes) {
        if ('accept' in changes) {
            this._createValidator();
            if (this.onChange) {
                this.onChange();
            }
        }
    }
    validate(c) {
        return !!this.validator ? this.validator(c) : null;
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
    _createValidator() {
        if (IsNullOrEmpty(this.accept)) {
            return;
        }
        this.validator = FileUploadValidators.accept(this.accept.split(','));
    }
}
FilesAcceptValidator.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesAcceptValidator, deps: [], target: i0.????FactoryTarget.Directive });
FilesAcceptValidator.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FilesAcceptValidator, selector: "file-upload[accept][formControlName], file-upload[accept][formControl], file-upload[accept][ngModel]", inputs: { accept: "accept" }, host: { properties: { "attr.accept": "accept ? accept : null" } }, providers: [{
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => FilesAcceptValidator),
            multi: true
        }], usesOnChanges: true, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesAcceptValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: 'file-upload[accept][formControlName], file-upload[accept][formControl], file-upload[accept][ngModel]',
                    providers: [{
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => FilesAcceptValidator),
                            multi: true
                        }],
                    host: { '[attr.accept]': 'accept ? accept : null' }
                }]
        }], propDecorators: { accept: [{
                type: Input
            }] } });

class FilesAcceptDirective {
    constructor(fileUpload, simpleFileUpload) {
        this.fileUpload = null;
        this.fileUpload = fileUpload || simpleFileUpload;
    }
    ngAfterViewInit() {
        this.setAccept(this.accept);
    }
    ngOnChanges(changes) {
        if ('accept' in changes && changes['accept'].currentValue !== changes['accept'].previousValue) {
            this.setAccept(this.accept);
        }
    }
    setAccept(accept) {
        if (this.fileUpload && this.fileUpload.control) {
            this.fileUpload.control.acceptFiles(accept);
        }
    }
}
FilesAcceptDirective.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesAcceptDirective, deps: [{ token: FileUploadComponent, host: true, optional: true, self: true }, { token: SimpleFileUploadComponent, host: true, optional: true, self: true }], target: i0.????FactoryTarget.Directive });
FilesAcceptDirective.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FilesAcceptDirective, selector: "file-upload[accept]", inputs: { accept: "accept" }, host: { properties: { "attr.accept": "accept ? accept : null" } }, usesOnChanges: true, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesAcceptDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'file-upload[accept]',
                    host: { '[attr.accept]': 'accept ? accept : null' }
                }]
        }], ctorParameters: function () { return [{ type: FileUploadComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }, {
                    type: Self
                }] }, { type: SimpleFileUploadComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }, {
                    type: Self
                }] }]; }, propDecorators: { accept: [{
                type: Input
            }] } });

class FilesDiscardDirective {
    constructor(fileUpload, simpleFileUpload) {
        this.discardValue = null;
        this.fileUpload = null;
        this.fileUpload = fileUpload || simpleFileUpload;
    }
    set discard(discard) {
        if (typeof discard === 'string' && (discard === 'true' || discard === 'false')) {
            this.discardValue = JSON.parse(discard.toLowerCase());
        }
        else if (typeof discard === 'boolean') {
            this.discardValue = discard;
        }
        else {
            throw Error(`Provided value in directive [discard]="${discard}" is not boolean.`);
        }
    }
    ngAfterViewInit() {
        this.setAccept(this.discardValue);
    }
    ngOnChanges(changes) {
        if ('discard' in changes && changes['discard'].currentValue !== changes['discard'].previousValue) {
            this.setAccept(this.discardValue);
        }
    }
    setAccept(discard) {
        if (this.fileUpload && this.fileUpload.control) {
            this.fileUpload.control.discardInvalid(discard);
        }
    }
}
FilesDiscardDirective.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesDiscardDirective, deps: [{ token: FileUploadComponent, host: true, optional: true, self: true }, { token: SimpleFileUploadComponent, host: true, optional: true, self: true }], target: i0.????FactoryTarget.Directive });
FilesDiscardDirective.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FilesDiscardDirective, selector: "file-upload[discard]", inputs: { discard: "discard" }, host: { properties: { "attr.discard": "discard ? discard : null" } }, usesOnChanges: true, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesDiscardDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'file-upload[discard]',
                    host: { '[attr.discard]': 'discard ? discard : null' }
                }]
        }], ctorParameters: function () { return [{ type: FileUploadComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }, {
                    type: Self
                }] }, { type: SimpleFileUploadComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }, {
                    type: Self
                }] }]; }, propDecorators: { discard: [{
                type: Input
            }] } });

class FilesNativeDirective {
    constructor(fileUpload, simpleFileUpload) {
        this.nativeValue = null;
        this.fileUpload = null;
        this.fileUpload = fileUpload || simpleFileUpload;
    }
    set native(isNative) {
        if (typeof isNative === 'string' && (isNative === 'true' || isNative === 'false')) {
            this.nativeValue = JSON.parse(isNative.toLowerCase());
        }
        else if (typeof isNative === 'boolean') {
            this.nativeValue = isNative;
        }
        else {
            throw Error(`Provided value in directive [native]="${isNative}" is not boolean.`);
        }
    }
    ngAfterViewInit() {
        this.enableNative(this.nativeValue);
    }
    ngOnChanges(changes) {
        if ('native' in changes && changes['native'].currentValue !== changes['native'].previousValue) {
            this.enableNative(this.nativeValue);
        }
    }
    enableNative(isNative) {
        if (this.fileUpload && this.fileUpload.control) {
            this.fileUpload.control.native(isNative);
        }
    }
}
FilesNativeDirective.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesNativeDirective, deps: [{ token: FileUploadComponent, host: true, optional: true, self: true }, { token: SimpleFileUploadComponent, host: true, optional: true, self: true }], target: i0.????FactoryTarget.Directive });
FilesNativeDirective.??dir = i0.????ngDeclareDirective({ minVersion: "12.0.0", version: "13.0.2", type: FilesNativeDirective, selector: "file-upload[native]", inputs: { native: "native" }, host: { properties: { "attr.native": "native ? native : null" } }, usesOnChanges: true, ngImport: i0 });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FilesNativeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'file-upload[native]',
                    host: { '[attr.native]': 'native ? native : null' }
                }]
        }], ctorParameters: function () { return [{ type: FileUploadComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }, {
                    type: Self
                }] }, { type: SimpleFileUploadComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }, {
                    type: Self
                }] }]; }, propDecorators: { native: [{
                type: Input
            }] } });

/*
 * FileUpload
 *
 * By Ivan Pintar, http://www.pintar-ivan.com
 * Licensed under the MIT License
 * See https://github.com/pIvan/file-upload/blob/master/README.md
 */
class FileUploadModule {
    ngDoBootstrap() { }
}
FileUploadModule.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadModule, deps: [], target: i0.????FactoryTarget.NgModule });
FileUploadModule.??mod = i0.????ngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadModule, declarations: [FileUploadComponent,
        FileUploadListItemComponent,
        FileUploadIconComponent,
        FileUploadDropZoneComponent,
        FileUploadAttributeComponent,
        FileSizeValidator,
        FilesLimitValidator,
        FilesAcceptValidator,
        FilesAcceptDirective,
        FilesDiscardDirective,
        FilesNativeDirective,
        SimpleFileUploadComponent], imports: [CommonModule], exports: [FileUploadComponent,
        FileUploadDropZoneComponent,
        FileUploadListItemComponent,
        FileUploadAttributeComponent,
        FileSizeValidator,
        FilesLimitValidator,
        FilesAcceptValidator,
        FilesAcceptDirective,
        FilesDiscardDirective,
        SimpleFileUploadComponent] });
FileUploadModule.??inj = i0.????ngDeclareInjector({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadModule, imports: [[
            CommonModule
        ]] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.2", ngImport: i0, type: FileUploadModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FileUploadComponent,
                        FileUploadListItemComponent,
                        FileUploadIconComponent,
                        FileUploadDropZoneComponent,
                        FileUploadAttributeComponent,
                        FileSizeValidator,
                        FilesLimitValidator,
                        FilesAcceptValidator,
                        FilesAcceptDirective,
                        FilesDiscardDirective,
                        FilesNativeDirective,
                        SimpleFileUploadComponent
                    ],
                    exports: [
                        FileUploadComponent,
                        FileUploadDropZoneComponent,
                        FileUploadListItemComponent,
                        FileUploadAttributeComponent,
                        FileSizeValidator,
                        FilesLimitValidator,
                        FilesAcceptValidator,
                        FilesAcceptDirective,
                        FilesDiscardDirective,
                        SimpleFileUploadComponent
                    ],
                    entryComponents: [
                        FileUploadComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-file-upload
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FileSizeValidator, FileUploadAttributeComponent, FileUploadComponent, FileUploadControl, FileUploadDropZoneComponent, FileUploadListItemComponent, FileUploadModule, FileUploadService, FileUploadTypes, FileUploadValidators, FilesAcceptDirective, FilesAcceptValidator, FilesDiscardDirective, FilesLimitValidator, FilesNativeDirective, SimpleFileUploadComponent };
//# sourceMappingURL=iplab-ngx-file-upload.mjs.map
