import imgEndPage from "figma:asset/b9a74bb6cf8c3373bdabff77c9d03825992c4a8f.png";
import imgFaqs from "figma:asset/e04c032cd6d3c70d2d6c944d90b1c641302a52a6.png";
import imgTimeline from "figma:asset/b698b8474aeec881ef6d1075d00247eaedaf9655.png";
import imgTracks from "figma:asset/dbde9649abfaafbc510db0693cfbc75ce5f3223f.png";
import imgPrizes from "figma:asset/8b24ceac4b17d181a370aea8ed452a9c6f109774.png";
import imgDates from "figma:asset/dfad918da999bcffd38c9f2533573b65bca677ce.png";
import imgHeroPage from "figma:asset/aa3af1d95aba4ccf88ccd4bd34162fea9842798b.png";

export default function GenesisWebsite() {
  return (
    <div className="relative size-full" data-name="GENESIS WEBSITE">
      <div className="absolute h-[1307px] left-[1127px] top-[6479px] w-[736px]" data-name="end page">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgEndPage} />
      </div>
      <div className="absolute h-[1138px] left-[1195px] top-[5341px] w-[640px]" data-name="faqs">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFaqs} />
      </div>
      <div className="absolute h-[879px] left-[1195px] top-[4462px] w-[600px]" data-name="timeline">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTimeline} />
      </div>
      <div className="absolute h-[1308px] left-[1127px] top-[3154px] w-[736px]" data-name="tracks">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTracks} />
      </div>
      <div className="absolute h-[1593px] left-[1127px] top-[1561px] w-[736px]" data-name="prizes">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrizes} />
      </div>
      <div className="absolute left-[1127px] size-[736px] top-[825px]" data-name="dates">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDates} />
      </div>
      <div className="absolute h-[819px] left-[766px] top-0 w-[1457px]" data-name="hero page">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroPage} />
      </div>
      <p className="absolute font-['Jaro:Regular',sans-serif] h-[214px] leading-[normal] left-[1219px] text-[140px] text-white top-[164px] w-[552px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 6" }}>{`GENESIS  5`}</p>
      <p className="absolute font-['Jaro:Regular',sans-serif] h-[214px] leading-[normal] left-[1335px] text-[140px] text-white top-[894px] w-[552px]" style={{ fontVariationSettings: "'opsz' 6" }}>
        DATES
      </p>
      <p className="absolute font-['Jaro:Regular',sans-serif] h-[214px] leading-[normal] left-[1311px] text-[140px] text-white top-[1732px] w-[552px]" style={{ fontVariationSettings: "'opsz' 6" }}>
        PRIZES
      </p>
      <p className="absolute font-['Jaro:Regular',sans-serif] h-[214px] leading-[normal] left-[1311px] text-[140px] text-white top-[3282px] w-[552px]" style={{ fontVariationSettings: "'opsz' 6" }}>
        TRACKS
      </p>
      <p className="absolute font-['Jaro:Regular',sans-serif] h-[214px] leading-[normal] left-[1266px] text-[140px] text-white top-[4592px] w-[552px]" style={{ fontVariationSettings: "'opsz' 6" }}>
        TIMELINE
      </p>
      <div className="absolute font-['Jaro:Regular',sans-serif] h-[214px] leading-[normal] left-[1266px] text-[140px] text-white top-[5448px] w-[552px]" style={{ fontVariationSettings: "'opsz' 6" }}>
        <p className="mb-0">FAQS</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Jaro:Regular',sans-serif] h-[214px] leading-[normal] left-[1266px] text-[140px] text-white top-[6542px] w-[552px]" style={{ fontVariationSettings: "'opsz' 6" }}>
        CONTACS
      </p>
    </div>
  );
}