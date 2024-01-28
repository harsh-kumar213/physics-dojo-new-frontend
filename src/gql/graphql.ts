/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  SocialCamelJSON: { input: any; output: any; }
};

export type AnswerInput = {
  answer: Scalars['String']['input'];
  arguments?: InputMaybe<Scalars['String']['input']>;
  problemId: Scalars['Int']['input'];
};

/**
 * Archive account and revoke refresh tokens.
 *
 * User must be verified and confirm password.
 */
export type ArchiveAccount = {
  __typename?: 'ArchiveAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type BranchType = Node & {
  __typename?: 'BranchType';
  courseSet: CourseTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  progressive: Scalars['Boolean']['output'];
};


export type BranchTypeCourseSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type BranchTypeConnection = {
  __typename?: 'BranchTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BranchTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `BranchType` and its cursor. */
export type BranchTypeEdge = {
  __typename?: 'BranchTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BranchType>;
};

export type ChallengeCategoryType = Node & {
  __typename?: 'ChallengeCategoryType';
  challengeSet: ChallengeTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};


export type ChallengeCategoryTypeChallengeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};

export type ChallengeCategoryTypeConnection = {
  __typename?: 'ChallengeCategoryTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChallengeCategoryTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ChallengeCategoryType` and its cursor. */
export type ChallengeCategoryTypeEdge = {
  __typename?: 'ChallengeCategoryTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ChallengeCategoryType>;
};

export type ChallengeChapterType = Node & {
  __typename?: 'ChallengeChapterType';
  challenge: ChallengeType;
  /** the number position in the challenge */
  chapterNumber: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** number of problems in this chapter (help find the 70%) */
  numberOfProblems?: Maybe<Scalars['Int']['output']>;
  pk?: Maybe<Scalars['Int']['output']>;
  problemSet?: Maybe<ProblemTypeConnection>;
  title: Scalars['String']['output'];
};


export type ChallengeChapterTypeProblemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ChallengeChapterTypeConnection = {
  __typename?: 'ChallengeChapterTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChallengeChapterTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ChallengeChapterType` and its cursor. */
export type ChallengeChapterTypeEdge = {
  __typename?: 'ChallengeChapterTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ChallengeChapterType>;
};

export type ChallengeEnrolledType = Node & {
  __typename?: 'ChallengeEnrolledType';
  challenge: ChallengeType;
  currentProblem: ProblemType;
  enrollDate: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  user: UserType;
};

export type ChallengeEnrolledTypeConnection = {
  __typename?: 'ChallengeEnrolledTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChallengeEnrolledTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ChallengeEnrolledType` and its cursor. */
export type ChallengeEnrolledTypeEdge = {
  __typename?: 'ChallengeEnrolledTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ChallengeEnrolledType>;
};

export type ChallengeType = Node & {
  __typename?: 'ChallengeType';
  challengeCategory?: Maybe<ChallengeCategoryType>;
  challengechapterSet: ChallengeChapterTypeConnection;
  createdDate: Scalars['DateTime']['output'];
  deleteOnExpiry: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  enrolledchallengeSet: ChallengeEnrolledTypeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  inDevelopment: Scalars['Boolean']['output'];
  /** mini description shown in listing (as short as posible) */
  minDescription?: Maybe<Scalars['String']['output']>;
  pk?: Maybe<Scalars['Int']['output']>;
  /** text that appear just b4 the title in challeges page */
  preTitle: Scalars['String']['output'];
  solvedProblems?: Maybe<SolvedProblemTypeConnection>;
  title: Scalars['String']['output'];
};


export type ChallengeTypeChallengechapterSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ChallengeTypeEnrolledchallengeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ChallengeTypeSolvedProblemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ChallengeTypeConnection = {
  __typename?: 'ChallengeTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChallengeTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ChallengeType` and its cursor. */
export type ChallengeTypeEdge = {
  __typename?: 'ChallengeTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ChallengeType>;
};

export type ChapterType = Node & {
  __typename?: 'ChapterType';
  chapterNumber: Scalars['Int']['output'];
  course: CourseType;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lessonSet?: Maybe<LessonTypeConnection>;
  name: Scalars['String']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
};


export type ChapterTypeLessonSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  chapter_Id?: InputMaybe<Scalars['Float']['input']>;
  chapter_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  notes_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};

export type ChapterTypeConnection = {
  __typename?: 'ChapterTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ChapterTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ChapterType` and its cursor. */
export type ChapterTypeEdge = {
  __typename?: 'ChapterTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ChapterType>;
};

export type Country = {
  __typename?: 'Country';
  /** ISO 3166-1 three character country code */
  alpha3?: Maybe<Scalars['String']['output']>;
  /** ISO 3166-1 two character country code */
  code?: Maybe<Scalars['String']['output']>;
  /** International Olympic Committee country code */
  iocCode?: Maybe<Scalars['String']['output']>;
  /** Country name */
  name?: Maybe<Scalars['String']['output']>;
  /** ISO 3166-1 numeric country code */
  numeric?: Maybe<Scalars['Int']['output']>;
};

export type CourseType = Node & {
  __typename?: 'CourseType';
  branch: BranchType;
  chapterSet: ChapterTypeConnection;
  children: CourseTypeConnection;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parents: CourseTypeConnection;
  pk?: Maybe<Scalars['Int']['output']>;
};


export type CourseTypeChapterSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseTypeChildrenArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CourseTypeParentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CourseTypeConnection = {
  __typename?: 'CourseTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CourseTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `CourseType` and its cursor. */
export type CourseTypeEdge = {
  __typename?: 'CourseTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CourseType>;
};

export type CreateResearchSubmission = {
  __typename?: 'CreateResearchSubmission';
  researchSubmission?: Maybe<ResearchSubmissionsType>;
};

export enum CustomUserCountry {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antarctica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Bonaire, Sint Eustatius and Saba */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Congo (the Democratic Republic of the) */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Côte d'Ivoire */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands (Malvinas) */
  Fk = 'FK',
  /** Micronesia (Federated States of) */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** North Korea */
  Kp = 'KP',
  /** South Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Laos */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin (French part) */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine, State of */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten (Dutch part) */
  Sx = 'SX',
  /** Syria */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Holy See */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** Virgin Islands (British) */
  Vg = 'VG',
  /** Virgin Islands (U.S.) */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW'
}

export type LessonType = Node & {
  __typename?: 'LessonType';
  chapter: ChapterType;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lessonNumber: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  video: Scalars['String']['output'];
};

export type LessonTypeConnection = {
  __typename?: 'LessonTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LessonTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `LessonType` and its cursor. */
export type LessonTypeEdge = {
  __typename?: 'LessonTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<LessonType>;
};

export type Mutations = {
  __typename?: 'Mutations';
  /**
   * Archive account and revoke refresh tokens.
   *
   * User must be verified and confirm password.
   */
  archiveAccount?: Maybe<ArchiveAccount>;
  createResearchSubmission?: Maybe<CreateResearchSubmission>;
  /**
   * Change account password when user knows the old password.
   *
   * A new token and refresh token are sent. User must be verified.
   */
  passwordChange?: Maybe<PasswordChange>;
  /**
   * Change user password without old password.
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, update
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordReset?: Maybe<PasswordReset>;
  /**
   * Set user password - for passwordless registration
   *
   * Receive the token that was sent by email.
   *
   * If token and new passwords are valid, set
   * user password and in case of using refresh
   * tokens, revoke all of them.
   *
   * Also, if user has not been verified yet, verify it.
   */
  passwordSet?: Maybe<PasswordSet>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Remove user secondary email.
   *
   * Require password confirmation.
   */
  removeSecondaryEmail?: Maybe<RemoveSecondaryEmail>;
  /**
   * Sends activation email.
   *
   * It is called resend because theoretically
   * the first activation email was sent when
   * the user registered.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  resendActivationEmail?: Maybe<ResendActivationEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
  /**
   * Send password reset email.
   *
   * For non verified users, send an activation
   * email instead.
   *
   * Accepts both primary and secondary email.
   *
   * If there is no user with the requested email,
   * a successful response is returned.
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmail>;
  /**
   * Send activation to secondary email.
   *
   * User must be verified and confirm password.
   */
  sendSecondaryEmailActivation?: Maybe<SendSecondaryEmailActivation>;
  signS3?: Maybe<SignS3>;
  socialAuth?: Maybe<SocialAuth>;
  solvedTheory?: Maybe<SolvedTheory>;
  /**
   * Swap between primary and secondary emails.
   *
   * Require password confirmation.
   */
  swapEmails?: Maybe<SwapEmails>;
  /**
   * test the answer given by user expect ``data:{}`` :
   * ``problem_id`` -> problem user is trying to answer
   * ``answer`` -> code writen by the user to be graded
   * ``arguments`` -> if the code expect user input (values in order that will be promted)
   */
  testAnswer?: Maybe<TestAnswer>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /**
   * Verify user account.
   *
   * Receive the token that was sent by email.
   * If the token is valid, make the user verified
   * by making the `user.status.verified` field true.
   */
  verifyAccount?: Maybe<VerifyAccount>;
  /**
   * Verify user secondary email.
   *
   * Receive the token that was sent by email.
   * User is already verified when using this mutation.
   *
   * If the token is valid, add the secondary email
   * to `user.status.secondary_email` field.
   *
   * Note that until the secondary email is verified,
   * it has not been saved anywhere beyond the token,
   * so it can still be used to create a new account.
   * After being verified, it will no longer be available.
   */
  verifySecondaryEmail?: Maybe<VerifySecondaryEmail>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  verifyToken?: Maybe<VerifyToken>;
};


export type MutationsArchiveAccountArgs = {
  password: Scalars['String']['input'];
};


export type MutationsCreateResearchSubmissionArgs = {
  filePath: Scalars['String']['input'];
  researchTask: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationsPasswordChangeArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationsPasswordResetArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationsPasswordSetArgs = {
  newPassword1: Scalars['String']['input'];
  newPassword2: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationsRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationsRegisterArgs = {
  email: Scalars['String']['input'];
  password1: Scalars['String']['input'];
  password2: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationsRemoveSecondaryEmailArgs = {
  password: Scalars['String']['input'];
};


export type MutationsResendActivationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationsRevokeTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationsSendPasswordResetEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationsSendSecondaryEmailActivationArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationsSignS3Args = {
  fileSize: Scalars['Int']['input'];
  filename: Scalars['String']['input'];
  filetype: Scalars['String']['input'];
};


export type MutationsSocialAuthArgs = {
  accessToken: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};


export type MutationsSolvedTheoryArgs = {
  problemId: Scalars['Int']['input'];
};


export type MutationsSwapEmailsArgs = {
  password: Scalars['String']['input'];
};


export type MutationsTestAnswerArgs = {
  data: AnswerInput;
};


export type MutationsTokenAuthArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};


export type MutationsVerifyAccountArgs = {
  token: Scalars['String']['input'];
};


export type MutationsVerifySecondaryEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationsVerifyTokenArgs = {
  token: Scalars['String']['input'];
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  unarchiving?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/**
 * Change account password when user knows the old password.
 *
 * A new token and refresh token are sent. User must be verified.
 */
export type PasswordChange = {
  __typename?: 'PasswordChange';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Change user password without old password.
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, update
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordReset = {
  __typename?: 'PasswordReset';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Set user password - for passwordless registration
 *
 * Receive the token that was sent by email.
 *
 * If token and new passwords are valid, set
 * user password and in case of using refresh
 * tokens, revoke all of them.
 *
 * Also, if user has not been verified yet, verify it.
 */
export type PasswordSet = {
  __typename?: 'PasswordSet';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum ProblemProblemType {
  /** code */
  Code = 'CODE',
  /** theory */
  Theory = 'THEORY'
}

export type ProblemType = Node & {
  __typename?: 'ProblemType';
  createdDate: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  myAnswer?: Maybe<SolvedProblemType>;
  pk?: Maybe<Scalars['Int']['output']>;
  /** number position of this problem in the chapter (help determine the 70% mark cross) */
  problemNumber: Scalars['Int']['output'];
  problemType: ProblemProblemType;
  /** prefield content of the answer if any */
  skeleton?: Maybe<Scalars['String']['output']>;
  solvedproblemSet: SolvedProblemTypeConnection;
  /** number of points for the theory part */
  theortyEigens: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  video?: Maybe<Scalars['String']['output']>;
};


export type ProblemTypeSolvedproblemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ProblemTypeConnection = {
  __typename?: 'ProblemTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProblemTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ProblemType` and its cursor. */
export type ProblemTypeEdge = {
  __typename?: 'ProblemTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProblemType>;
};

export type Query = {
  __typename?: 'Query';
  allBranches?: Maybe<BranchTypeConnection>;
  allChapters?: Maybe<ChapterTypeConnection>;
  allCourses?: Maybe<CourseTypeConnection>;
  allLessons?: Maybe<LessonTypeConnection>;
  allResearchSubmissions: ResearchSubmissionsTypeConnection;
  allResearchTasks: ResearchTaskTypeConnection;
  branch?: Maybe<BranchType>;
  categories?: Maybe<ChallengeCategoryTypeConnection>;
  challenge?: Maybe<ChallengeType>;
  challenges?: Maybe<ChallengeTypeConnection>;
  chapter?: Maybe<ChapterType>;
  course?: Maybe<CourseType>;
  enrolledChallenges?: Maybe<ChallengeTypeConnection>;
  enrolledProblems?: Maybe<ProblemTypeConnection>;
  lesson?: Maybe<LessonType>;
  me?: Maybe<UserType>;
  problem?: Maybe<ProblemType>;
  problemAnswer?: Maybe<SolvedProblemType>;
  researchSubmission?: Maybe<ResearchSubmissionsType>;
  researchTask?: Maybe<ResearchTaskType>;
};


export type QueryAllBranchesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  progressive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAllChaptersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  course_Id?: InputMaybe<Scalars['Float']['input']>;
  course_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  branch_Id?: InputMaybe<Scalars['Float']['input']>;
  branch_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllLessonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  chapter_Id?: InputMaybe<Scalars['Float']['input']>;
  chapter_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  notes_Icontains?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllResearchSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  filePath_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllResearchTasksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryBranchArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChallengeArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChallengesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChapterArgs = {
  chapterNumber?: InputMaybe<Scalars['Int']['input']>;
  courseId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCourseArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEnrolledChallengesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title_Icontains?: InputMaybe<Scalars['String']['input']>;
  challengeCategory_Title_Istartswith?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEnrolledProblemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLessonArgs = {
  chapterId?: InputMaybe<Scalars['Int']['input']>;
  lessonNumber?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProblemArgs = {
  chapterId: Scalars['Int']['input'];
  problemNumber: Scalars['Int']['input'];
};


export type QueryProblemAnswerArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryResearchSubmissionArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryResearchTaskArgs = {
  pk?: InputMaybe<Scalars['Int']['input']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Remove user secondary email.
 *
 * Require password confirmation.
 */
export type RemoveSecondaryEmail = {
  __typename?: 'RemoveSecondaryEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ResearchSubmissionsType = Node & {
  __typename?: 'ResearchSubmissionsType';
  approved: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  filePath: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  researchTask: ResearchTaskType;
  title: Scalars['String']['output'];
  user: UserType;
};

export type ResearchSubmissionsTypeConnection = {
  __typename?: 'ResearchSubmissionsTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ResearchSubmissionsTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ResearchSubmissionsType` and its cursor. */
export type ResearchSubmissionsTypeEdge = {
  __typename?: 'ResearchSubmissionsTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ResearchSubmissionsType>;
};

export type ResearchTaskType = Node & {
  __typename?: 'ResearchTaskType';
  allSubmissions?: Maybe<ResearchSubmissionsTypeConnection>;
  approvedSubmissions?: Maybe<ResearchSubmissionsTypeConnection>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  miniDescription: Scalars['String']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  researchsubmissionsSet: ResearchSubmissionsTypeConnection;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type ResearchTaskTypeAllSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  filePath_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ResearchTaskTypeApprovedSubmissionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_Lte?: InputMaybe<Scalars['DateTime']['input']>;
  filePath_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ResearchTaskTypeResearchsubmissionsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ResearchTaskTypeConnection = {
  __typename?: 'ResearchTaskTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ResearchTaskTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ResearchTaskType` and its cursor. */
export type ResearchTaskTypeEdge = {
  __typename?: 'ResearchTaskTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ResearchTaskType>;
};

/**
 * Sends activation email.
 *
 * It is called resend because theoretically
 * the first activation email was sent when
 * the user registered.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type ResendActivationEmail = {
  __typename?: 'ResendActivationEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  revoked?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Send password reset email.
 *
 * For non verified users, send an activation
 * email instead.
 *
 * Accepts both primary and secondary email.
 *
 * If there is no user with the requested email,
 * a successful response is returned.
 */
export type SendPasswordResetEmail = {
  __typename?: 'SendPasswordResetEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Send activation to secondary email.
 *
 * User must be verified and confirm password.
 */
export type SendSecondaryEmailActivation = {
  __typename?: 'SendSecondaryEmailActivation';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SignS3 = {
  __typename?: 'SignS3';
  url?: Maybe<Scalars['String']['output']>;
};

export type SocialAuth = {
  __typename?: 'SocialAuth';
  refreshToken?: Maybe<Scalars['String']['output']>;
  social?: Maybe<SocialType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type SocialNode = Node & {
  __typename?: 'SocialNode';
  created: Scalars['DateTime']['output'];
  extraData?: Maybe<Scalars['SocialCamelJSON']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  modified: Scalars['DateTime']['output'];
  provider: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  user: UserType;
};

export type SocialNodeConnection = {
  __typename?: 'SocialNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SocialNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SocialNode` and its cursor. */
export type SocialNodeEdge = {
  __typename?: 'SocialNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SocialNode>;
};

export type SocialType = {
  __typename?: 'SocialType';
  created: Scalars['DateTime']['output'];
  extraData?: Maybe<Scalars['SocialCamelJSON']['output']>;
  id: Scalars['ID']['output'];
  modified: Scalars['DateTime']['output'];
  provider: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  user: UserType;
};

export type SolvedProblemType = Node & {
  __typename?: 'SolvedProblemType';
  answer: Scalars['String']['output'];
  awardedPoints: Scalars['Int']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  problem: ProblemType;
  solveDate?: Maybe<Scalars['DateTime']['output']>;
  solved: Scalars['Boolean']['output'];
  startDate?: Maybe<Scalars['DateTime']['output']>;
  user: UserType;
};

export type SolvedProblemTypeConnection = {
  __typename?: 'SolvedProblemTypeConnection';
  edgeCount?: Maybe<Scalars['Int']['output']>;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SolvedProblemTypeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `SolvedProblemType` and its cursor. */
export type SolvedProblemTypeEdge = {
  __typename?: 'SolvedProblemTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SolvedProblemType>;
};

export type SolvedTheory = {
  __typename?: 'SolvedTheory';
  eigenTokens?: Maybe<Scalars['Int']['output']>;
};

/**
 * Swap between primary and secondary emails.
 *
 * Require password confirmation.
 */
export type SwapEmails = {
  __typename?: 'SwapEmails';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * test the answer given by user expect ``data:{}`` :
 * ``problem_id`` -> problem user is trying to answer
 * ``answer`` -> code writen by the user to be graded
 * ``arguments`` -> if the code expect user input (values in order that will be promted)
 */
export type TestAnswer = {
  __typename?: 'TestAnswer';
  eigenTokens?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  mySolution?: Maybe<SolvedProblemType>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  address: Scalars['String']['output'];
  archived?: Maybe<Scalars['Boolean']['output']>;
  city: Scalars['String']['output'];
  country?: Maybe<CustomUserCountry>;
  dateJoined: Scalars['DateTime']['output'];
  dob?: Maybe<Scalars['Date']['output']>;
  eigenTokens: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  enrolledchallengeSet: ChallengeEnrolledTypeConnection;
  firstName: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  idNumber: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  researchsubmissionsSet: ResearchSubmissionsTypeConnection;
  secondaryEmail?: Maybe<Scalars['String']['output']>;
  socialAuth: SocialNodeConnection;
  solvedproblemSet: SolvedProblemTypeConnection;
  theme: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
  verified?: Maybe<Scalars['Boolean']['output']>;
};


export type UserNodeEnrolledchallengeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeResearchsubmissionsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeSocialAuthArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UserNodeSolvedproblemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UserType = {
  __typename?: 'UserType';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country?: Maybe<Country>;
  dateJoined: Scalars['DateTime']['output'];
  dob?: Maybe<Scalars['Date']['output']>;
  eigenTokens: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  enrolledchallengeSet: ChallengeEnrolledTypeConnection;
  firstName: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idNumber: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  pk?: Maybe<Scalars['Int']['output']>;
  researchsubmissionsSet: ResearchSubmissionsTypeConnection;
  socialAuth: SocialNodeConnection;
  solvedproblemSet: SolvedProblemTypeConnection;
  theme: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
};


export type UserTypeEnrolledchallengeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTypeResearchsubmissionsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type UserTypeSocialAuthArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uid?: InputMaybe<Scalars['String']['input']>;
  uid_In?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UserTypeSolvedproblemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Verify user account.
 *
 * Receive the token that was sent by email.
 * If the token is valid, make the user verified
 * by making the `user.status.verified` field true.
 */
export type VerifyAccount = {
  __typename?: 'VerifyAccount';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Verify user secondary email.
 *
 * Receive the token that was sent by email.
 * User is already verified when using this mutation.
 *
 * If the token is valid, add the secondary email
 * to `user.status.secondary_email` field.
 *
 * Note that until the secondary email is verified,
 * it has not been saved anywhere beyond the token,
 * so it can still be used to create a new account.
 * After being verified, it will no longer be available.
 */
export type VerifySecondaryEmail = {
  __typename?: 'VerifySecondaryEmail';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type VerifyToken = {
  __typename?: 'VerifyToken';
  errors?: Maybe<Scalars['ExpectedErrorType']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};