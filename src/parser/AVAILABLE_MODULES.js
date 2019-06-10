import JOBS from 'data/JOBS'

import CORE from './core'

import AST from './jobs/ast'
import BLM from './jobs/blm'
import BRD from './jobs/brd'
import DNC from './jobs/dnc'
import DRG from './jobs/drg'
import DRK from './jobs/drk'
import GNB from './jobs/gnb'
import MCH from './jobs/mch'
import MNK from './jobs/mnk'
import NIN from './jobs/nin'
import PLD from './jobs/pld'
import RDM from './jobs/rdm'
import SAM from './jobs/sam'
import SCH from './jobs/sch'
import SMN from './jobs/smn'
import WAR from './jobs/war'
import WHM from './jobs/whm'

export default {
	CORE,

	JOBS: {
		[JOBS.PALADIN.logType]: PLD,
		[JOBS.WARRIOR.logType]: WAR,
		[JOBS.DARK_KNIGHT.logType]: DRK,
		[JOBS.GUNBREAKER.logType]: GNB,

		[JOBS.WHITE_MAGE.logType]: WHM,
		[JOBS.SCHOLAR.logType]: SCH,
		[JOBS.ASTROLOGIAN.logType]: AST,

		[JOBS.MONK.logType]: MNK,
		[JOBS.DRAGOON.logType]: DRG,
		[JOBS.NINJA.logType]: NIN,
		[JOBS.SAMURAI.logType]: SAM,

		[JOBS.BARD.logType]: BRD,
		[JOBS.MACHINIST.logType]: MCH,
		[JOBS.DANCER.logType]: DNC,

		[JOBS.BLACK_MAGE.logType]: BLM,
		[JOBS.SUMMONER.logType]: SMN,
		[JOBS.RED_MAGE.logType]: RDM,
	},

	BOSSES: {
		// [BOSSES.SOME_BOSS.logId]: IMPORTED_BOSS_MODULES,
	},
}
